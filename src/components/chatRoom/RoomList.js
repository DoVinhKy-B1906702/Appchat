import React from 'react'
import {Collapse, Typography, Button} from 'antd'
import styled from 'styled-components';
import {PlusSquareOutlined} from '@ant-design/icons';
const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
    &&& {
        .ant-collapse-header, p {
            color: white;
        }

        .ant-collapse-content-box {
            padding: 0 40px;
        }
        .add-room {
            color: white;
            padding: 00;
        }
    }
`
const LinkStyled = styled(Typography.Link)`
    display: block;
    margin-bottom: 5px;
    color: white;
`;

export default function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={['1']}>
        <PanelStyled header="Danh sach cac phong" key='1'>
            <LinkStyled>1</LinkStyled>
            <LinkStyled>2</LinkStyled>
            <LinkStyled>3</LinkStyled>
            <Button type='text' icon={<PlusSquareOutlined />} className='add-room'>Add Room</Button>
        </PanelStyled>
    </Collapse>
  )
}
