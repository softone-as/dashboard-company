import { Form, Input, Modal, Switch } from "antd";

export default function FormModal({
    title,
    isModalVisible,
    handleOk,
    handleCancel,
    form,
}) {
    return (
        <Modal
            title={title}
            visible={isModalVisible}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        handleOk(values);
                        form.resetFields();
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
            onCancel={handleCancel}
            okText="Submit"
            cancelText="Cancel"
        >
            <Form layout="vertical" form={form}>
                <Form.Item label="id" name="id" hidden></Form.Item>
                <Form.Item
                    label="Name"
                    name="name"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input the name!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name="address"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input the address!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Country"
                    name="country"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input the country!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone Number"
                    name="phone_number"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input the Phone Number!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Job Title"
                    name="job_title"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input the Job Title!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                    style={{ width: "100%" }}
                    rules={[
                        {
                            required: true,
                            message: "Please input the Status!",
                        },
                    ]}
                    valuePropName="checked"
                >
                    <Switch />
                </Form.Item>
            </Form>
        </Modal>
    );
}
