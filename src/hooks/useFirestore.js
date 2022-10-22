import React, { useState } from "react";

import { db } from "../firebase/config";


const  useFirestore = (collection, condition) => {
    const [documents, setDocuments] = useState([]);

     React.useEffect(() => {
        let collectionRef = db.collection(collection).orderBy('createdAt');
        // condition
        /*
            {
                fieldName: 'abc',
                operator:'==',
                compareValue: 'abc'
            }
        */
            //|| !condition.compareValue.length
        if( condition ) {
            if (!condition.compareValue  ) {
                return;
            }
            collectionRef = collectionRef.where(
                condition.fieldName,
                condition.operator,
                condition.compareValue
                );
        }
        const unsubscribe = collectionRef.onSnapshot((snapshot) => {
            const documents = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))


            setDocuments(documents);
        })
        //clean up fc
        return unsubscribe;
        
    },[collection, condition]);

    return documents;
}


export default useFirestore;