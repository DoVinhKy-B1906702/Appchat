import { UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Tooltip, Input} from 'antd';
import React from 'react'
import styled from 'styled-components'
import Message from './Message';

const HeaderStyled= styled.div`
  display:flex;
  justify-content: space-between;
  height: 56px;
  padding:0 16px;
  align-items: center;
  border-bottom: 1px solid rgb(230, 230, 230);


 .header {
  &__info {
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  &__title {
    margin: 0;
    fon-weight: bold;
  }
  &__description {
    font-size: 1.2rem;
  }
 }


`;

const ButtonGroupStyled = styled.div`
  display: flex;
  align-item: center;

`;
const ContentStyled= styled.div`

`;

const MessageListStyled = styled.div`

`;

export default function ChatWindow() {
  return (
    <div>
      <HeaderStyled>
        <div className='header__info'>
          <p className='header__title'>Room 1</p>
          <span className='header__description'>Day la room 1</span>
        </div>
        <ButtonGroupStyled>
          <Button icon={<UserAddOutlined />} type='text'>
            Mời
          </Button>
          <Avatar.Group size='small' maxCount={3}>
            <Tooltip title='A'>
              <Avatar>
                    A
              </Avatar>
            </Tooltip>
            <Tooltip title='B'>
              <Avatar>
                    B
              </Avatar>
            </Tooltip>
            <Tooltip title='C'>
              <Avatar>
                    C
              </Avatar>
            </Tooltip>
            <Tooltip title='D'>
              <Avatar>
                    D
              </Avatar>
            </Tooltip>
          </Avatar.Group>
        </ButtonGroupStyled>
      </HeaderStyled>
      <ContentStyled>
        <MessageListStyled>
          
        </MessageListStyled>
        <Form>
          <Form.Item>
            <Input />
          </Form.Item>
          <Button>Send</Button>
        </Form>
      </ContentStyled>
    </div>
  )
}
