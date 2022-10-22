import { Form, Modal, Select, Spin, Avatar } from 'antd'
import React, { useState } from 'react'
import { AppContext } from '../../Context/AppProvider';
import { AuthContext } from '../../Context/AuthProvider';
import { addDocument } from '../../firebase/services';

import debounce from 'lodash';

function DebounceSelect({fetchOptions, debounceTimeout = 600, ...props}) {

    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);
    
    const debounceFetcher = React.useMemo(() => {
        const loadOptions = (value) => {
            setOptions([]);
            setFetching(true);

            fetchOptions(value).then(newOptions => {
                setOptions(newOptions);
                setFetching(false);
            })
        }


        return debounce(loadOptions, debounceTimeout);
    }, [debounceTimeout, fetchOptions]);

    return (
        <Select
            labelInValue
            onSearch={debounceFetcher}
            notFoundContent={ fetching ? <Spin size='small' i/> : null}
            {...props}
        >
            {
                options.map(option => (
                    <Select.Option>
                        <Avatar size='small' src={option.photoURL}>
                            {option.photoURL ? '' : option.label.charAt(0).toUpperCase()}
                        </Avatar>
                        {`${option.label}`}
                    </Select.Option>
                ))
            }
        </Select>
    )
}
async function fetchUserList() {

} 

export default function InviteMemberModal() {
    const { isInviteMemberVisible, setIsInviteMemberVisible } = React.useContext(AppContext);
    const { user: {uid }} = React.useContext(AuthContext);
    const [form] = Form.useForm();
    const [value, setValue] = useState('');

    const handleOk = () => {
        // handle logic
        // add new room to firestore
        addDocument('rooms',{...form.getFieldsValue(), members: [uid]})
        
        // reset form
        form.resetFields();


        setIsInviteMemberVisible(false);
    }
    const handleCancel = () => {
        // reset form
        form.resetFields();
        setIsInviteMemberVisible(false);

    }
  return (
    <div>
        <Modal 
            title='Mời thêm thành viên' 
            open={isInviteMemberVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form form={form} layout='vertical'>
                <DebounceSelect
                    mode='multiple'
                    Label='Tên thành viên'
                    value= {value}
                    placeholder='Nhập tên thành viên'
                    fetchOptions={fetchUserList}
                    onChange={ newValue => setValue(newValue)}
                    style={{width: '100%'}}
                />
            </Form>
        </Modal>
    </div>
  )
}
