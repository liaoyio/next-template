'use client'
import { Button, Form, Input, Modal } from 'antd'
import { useState } from 'react'

import { useRouter } from 'next/navigation'

const App = () => {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const onFinish = (values: any) => {
    router.push('/')
    setIsModalOpen(false)
  }

  type FieldType = {
    username?: string
    password?: string
  }

  const handleCancel = () => {
    router.push('/')
    setIsModalOpen(false)
  }

  return (
    <>
      <Modal title="Login Modal" open={isModalOpen} onCancel={handleCancel} footer={null}>
        <Form name="basic" className="pt-6" style={{ maxWidth: 600 }} onFinish={onFinish}>
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="flex flex-row-reverse">
            <Button type="primary" htmlType="submit" className="bg-[#10b981]">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default App
