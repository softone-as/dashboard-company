import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";

export default function Tables({
    setIdCustomer,
    showDeleteConfirm,
    data,
    loading,
}) {
    const columns = [
        {
            title: "No",
            dataIndex: "no",
        },
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: "Address",
            dataIndex: "address",
        },
        {
            title: "Country",
            dataIndex: "country",
        },
        {
            title: "Phone Number",
            dataIndex: "phone_number",
        },
        {
            title: "Job Title",
            dataIndex: "job_title",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            filters: [
                {
                    text: "Active",
                    value: "true",
                },
                {
                    text: "In Active",
                    value: "false",
                },
            ],
            onFilter: (value, record) => record.status.indexOf(value) === 0,
            render: (status, index) => (
                <>
                    {status === "true" ? (
                        <Tag color={"#3F8600"} key={index}>
                            {"ACTIVE"}
                        </Tag>
                    ) : (
                        <Tag color={"#CF1322"} key={index}>
                            {"IN ACTIVE"}
                        </Tag>
                    )}
                </>
            ),
        },
        {
            title: "",
            dataIndex: "detail",
            key: "detail",
            render: (text, record) => (
                <Space>
                    <>
                        <Button
                            icon={<EditOutlined />}
                            onClick={() => setIdCustomer(record.key)}
                        />
                        <Button
                            icon={<DeleteOutlined />}
                            onClick={() => showDeleteConfirm(record.key)}
                            danger
                        />
                    </>
                </Space>
            ),
        },
    ];

    return <Table columns={columns} dataSource={data} loading={loading} />;
}
