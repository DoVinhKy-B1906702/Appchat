import firebase,{ db } from "./config"

export const addDocument = (collection, data) => {
    const query = db.collection(collection);

    query.add({
        // toan tu spread lay du lieu
        ...data,
        // lay thoi gian hien tai cua firebase
        createdAt:  firebase.firestore.FieldValue.serverTimestamp() 
    })
}