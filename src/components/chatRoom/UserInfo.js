import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { auth,db } from '../../firebase/config';
import { AuthContext } from '../../Context/AuthProvider';

const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgb(82, 38, 89);

    .username {
        color: white;
        margin-left: 5px;
    }
`;

export default function UserInfo() {
    // React.useEffect(() => {
    //     db.collection('users').onSnapshot((snapshot) => {
    //         const data = snapshot.docs.map(doc => ({
    //             ...doc.data(),
    //             id: doc.id,
    //         }));
    //         console.log({data, snapshot})
    //     })
    // },[])
    // su dung useContext de lay du lieu tu Auth Context

    
    const { user : {
        displayName, photoURL
    }} = React.useContext(AuthContext);

  return (
    <WrapperStyled>
        <div>
            <Avatar src={photoURL}>{photoURL ? '' : displayName?.charAt(0).toUpperCase()}</Avatar>
            <Typography.Text className='username'>
                {displayName}
            </Typography.Text>
        </div>
        <Button ghost onClick={() => auth.signOut() }>Log out</Button>
    </WrapperStyled>
  )
}
