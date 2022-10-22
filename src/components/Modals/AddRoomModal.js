import { Form, Modal, Input } from 'antd'
import React from 'react'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/services';


export default function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = React.useContext(AppContext);
    const { user: {uid }} = React.useContext(AuthContext);
    const [form] = Form.useForm();


    const handleOk = () => {
        // handle logic
        // add new room to firestore
        addDocument('rooms',{...form.getFieldsValue(), members: [uid]})
        
        // reset form
        form.resetFields();


        setIsAddRoomVisible(false);
    }
    const handleCancel = () => {
        // reset form
        form.resetFields();
        setIsAddRoomVisible(false);

    }
  return (
    <div>
        <Modal 
            title='Tạo phòng' 
            open={isAddRoomVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout='vertical'>
                <Form.Item label="Tên phòng" name='name'>
                    <Input placeholder='Nhập tên phòng' />
                </Form.Item>
                <Form.Item label="Thông tin mô tả" name='description'>
                    <Input.TextArea placeholder='Nhập thông tin mô tả' />
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}
