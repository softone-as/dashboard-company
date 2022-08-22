import { ExclamationCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Row } from "antd";
import Search from "antd/lib/input/Search";
import confirm from "antd/lib/modal/confirm";
import { useEffect, useState } from "react";
import FormModal from "../components/shared/FormModal";
import Tables from "../components/shared/Tables";
import useCustomers from "../hooks/useCustomers";
import { CustomerService } from "../services/CustomerService";

export default function Customers() {
    const [refresh, setRefresh] = useState("");
    const { customer, loading } = useCustomers(refresh);
    const [keyword, setKeyword] = useState("");
    const [idCustomer, setIdCustomer] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();

    const data = customer.map((customerItem, index) => ({
        key: `${customerItem.id}`,
        no: `${index + 1}`,
        name: `${customerItem.name}`,
        address: `${customerItem.address}`,
        country: `${customerItem.country}`,
        phone_number: `${customerItem.phone_number}`,
        job_title: `${customerItem.job_title}`,
        status: `${customerItem.status}`,
        created_at: `${customerItem.created_at}`,
        update_at: `${customerItem.update_at}`,
        detail: "...",
    }));

    const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
    );

    useEffect(() => {
        if (idCustomer !== 0) {
            let dataUpdated = filteredData.find(
                (item) => item.key === idCustomer
            );
            form.setFieldsValue({
                id: dataUpdated.key,
                ...dataUpdated,
            });
            setIsModalVisible(true);
        }
    }, [form, idCustomer, filteredData]);

    const onSearch = (value) => {
        setKeyword(value);
    };

    const handleOk = (values) => {
        idCustomer !== 0
            ? CustomerService.updateCustomer(values)
                  .then(() => {
                      setRefresh(new Date().getTime());
                      setIdCustomer(0);
                      setIsModalVisible(false);
                  })
                  .catch((error) => {
                      return alert(error.message.errorInfo);
                  })
            : CustomerService.addCustomer(values)
                  .then(() => {
                      setRefresh(new Date().getTime());
                      setIsModalVisible(false);
                  })
                  .catch((error) => {
                      return alert(error.message.errorInfo);
                  });
    };

    const handleCancel = () => {
        setIdCustomer(0);
        setIsModalVisible(false);
    };

    const showDeleteConfirm = (id) => {
        confirm({
            title: "Are you sure want to delete this customer?",
            icon: <ExclamationCircleOutlined />,
            okText: "Ok",
            okType: "danger",
            cancelText: "No",

            onOk() {
                CustomerService.deleteCustomer(id)
                    .then(() => {
                        setRefresh(new Date().getTime());
                    })
                    .catch((error) => {
                        console.log("Something went wrong", error);
                    });
            },

            onCancel() {
                console.log("Cancel");
            },
        });
    };

    return (
        <>
            {/* Modal */}
            <FormModal
                title={idCustomer !== 0 ? "Update Customer" : "Add Customer"}
                handleOk={handleOk}
                handleCancel={handleCancel}
                isModalVisible={isModalVisible}
                form={form}
            />
            <Row>
                <Col span={24}>
                    <div className="customers">
                        <div className="customer-header">
                            <h3>Daftar Customer</h3>
                            <div className="customer-action">
                                <Search
                                    placeholder="search Customer"
                                    onSearch={onSearch}
                                    style={{
                                        width: 200,
                                        marginRight: "1rem",
                                    }}
                                />
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={() => setIsModalVisible(true)}
                                >
                                    Tambah Customer
                                </Button>
                            </div>
                        </div>

                        <Tables
                            setIdCustomer={setIdCustomer}
                            showDeleteConfirm={showDeleteConfirm}
                            data={filteredData}
                            loading={loading}
                        />
                    </div>
                </Col>
            </Row>
        </>
    );
}
