
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom';
import { auth } from '../firebase/config';
import { Spin } from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState({}); 
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // this is sideEffect
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if ( user) {
                const { displayName, email, uid, photoURL} = user;
                setUser({
                    displayName, email, uid, photoURL
                });

                setIsLoading(false);
                history.push('/');
                return;
            } 
            setUser({});
            setIsLoading(false);
            history.push('/login');
        });
        return () => {
            unsubscribe();   
        }
   
}, [history])
  return (
    <AuthContext.Provider value={{ user }}>
        {isLoading ? <Spin style={{ position: 'fixed', inset: 0 }} /> : children}
    </AuthContext.Provider>
    
  )
}










