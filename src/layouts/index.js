import { HomeOutlined, WalletOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
const { Sider, Content } = Layout;

const Layouts = ({ children }) => {
    const [current, setCurrent] = useState(1);
    const items = [
        {
            icon: <HomeOutlined />,
            label: "Dashboard",
            path: "/",
        },
        {
            icon: <WalletOutlined />,
            label: "Customers",
            path: "/customers",
        },
    ].map((item, index) => {
        return {
            key: index + 1,
            label: <Link to={item.path}>{item.label}</Link>,
            icon: item.icon,
        };
    });

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <Layout>
            <Sider collapsed={true} breakpoint="lg">
                <h3 className="logo">MIG</h3>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                    selectedKeys={[current]}
                    onClick={onClick}
                    items={items}
                />
            </Sider>
            <Layout className="site-layout">
                <Content className="site-layout-background">
                    <Header />
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Layouts;
