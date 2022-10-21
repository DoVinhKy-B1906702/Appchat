import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'

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
  return (
    <WrapperStyled>
        <div>
            <Avatar>A</Avatar>
            <Typography.Text className='username'>
                ABC
            </Typography.Text>
        </div>
        <Button ghost>Log out</Button>
    </WrapperStyled>
  )
}
