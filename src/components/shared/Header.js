import { BellOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Breadcrumbs from "./Breadcrumbs";

export default function Header() {
    return (
        <div className="header">
            <Breadcrumbs />
            <div className="action-menu">
                <SearchOutlined />
                <BellOutlined />
                <div className="user-profile">
                    <Avatar
                        size={20}
                        style={{ backgroundColor: "#87d068" }}
                        icon={<UserOutlined />}
                    />
                    <p>John Doe</p>
                </div>
            </div>
        </div>
    );
}
