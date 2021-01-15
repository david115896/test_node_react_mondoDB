
import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom'
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const RoomEdit = ({id, room, setRoom}) => {
    const navigate = useNavigate()
    const [values, setValues] = useState(null)

    useEffect(() => {
        setValues(room)
    }, [room, id])


  const onFinish = async (values) => {
    await window.fetch(`/api/rooms/${id}`, {
        headers: {
            Accept: 'Application/json',
            'Content-Type': 'Application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(values)
    })
    console.log('Success:', values);
    setRoom(values)

  };

  const handleChange = (event) => {
    const {value, name} = event.target
    setValues({...values, [name] : value})
    
  };

  const handleDelete = async () => {
    await window.fetch(`/api/rooms/${id}`, {
        method: 'DELETE',
    })
    navigate('/rooms')
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if(!values) return null

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Nom"
        name="name"
        initialValue={values.name}
        rules={[
          {
            required: true,
            message: 'Merci de renseigner un nom pour la chambre !',
          },
        ]}
      >
        <Input value={values.name}  name='name' onChange={handleChange}  />
      </Form.Item>

      <Form.Item
        label="Max personnes"
        name="maxPersons"
        initialValue={values.maxPersons}

        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input value={values.maxPersons} type='number' name='maxPersons' />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Modifier
        </Button>
        <Button type="danger" style={{marginLeft: '1rem'}} onClick={handleDelete}>
          Supprimer
        </Button>
      </Form.Item>
    </Form>
  );
};


export default RoomEdit;
