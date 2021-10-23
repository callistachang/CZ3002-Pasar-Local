import { Form, Input, Button, Upload, Modal, InputNumber } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import React from 'react';


// todo: On submit, add item to database
const VendorAddProduct = () => {
    const [form] = Form.useForm();

    const [value, setValue] = React.useState('0.00');

    const { TextArea } = Input;

    const onChange = e => {
        console.log('Change:', e.target.value);
    };

    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item label="Upload Image" name="uploadImageWall">
                <PicturesWall/>
            </Form.Item>
            <Form.Item
                name="productName"
                label="Product Name"
                rules={[
                    {
                        required: true,
                        message: 'Please input your product name!',
                    },
                ]}
                tooltip="This is a required field">
                <Input placeholder="Enter Product Name" />
            </Form.Item>
            <Form.Item
                name="price"
                label="Price"
                rules={[
                    {
                        required: true,
                        message: 'Please input a price!',
                    },
                ]}
                tooltip="This is a required field"
            >
                <InputNumber min={0.01} value={value} onChange={setValue} />
            </Form.Item>
            <Form.Item name="description" label="Description">
                <TextArea rows={4} showCount maxLength={500} onChange={onChange} />
            </Form.Item>
            <Form.Item>
                <Button type="primary">Submit</Button>
            </Form.Item>
        </Form>
    )
}

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    };

    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    handleChange = ({ fileList }) => this.setState({ fileList });

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>
        );
        return (
            <>
                <Upload
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </>
        );
    }
}






export default VendorAddProduct
