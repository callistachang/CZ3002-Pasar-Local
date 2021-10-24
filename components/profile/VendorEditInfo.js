import {Button, Descriptions, Form, Input, InputNumber} from "antd"
import React from "react";

// todo get buyer info
const VendorEditInfo = () => {
    const { TextArea } = Input;
    const onChange = e => {
        console.log('Change:', e.target.value);
    };
    return (
        <>
            <Form
                form={form}
                layout="vertical"
                // todo: add initial values todo: submit form
                initialValues={{ productName: "formLayout" }}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                    tooltip="This is a required field">
                    <Input placeholder="Enter Name" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input an email!',
                        },
                    ]}
                    tooltip="This is a required field"
                >
                    <Input placeholder="Enter email" />
                </Form.Item>

                <Form.Item name="description" label="Description">
                    <TextArea rows={4} showCount maxLength={500} onChange={onChange} />
                </Form.Item>

                <Form.Item name="websiteLink" label="Website Link">
                    <Input placeholder="Enter Website Link" />
                </Form.Item>

                <Form.Item name="socialMediaLink" label="Social Media LInks">
                    <TextArea rows={4} onChange={onChange} />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input an address!',
                        },
                    ]}
                    tooltip="This is a required field"
                >
                    <Input placeholder="Enter Address" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default VendorEditInfo