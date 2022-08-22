import { ShareAltOutlined } from "@ant-design/icons";
import { Col } from "antd";

export default function RelationItem({ total, title }) {
    return (
        <Col span={8}>
            <div className="relation-item">
                <ShareAltOutlined />
                <div className="total">
                    <span>{total}</span>
                    <p>{title}</p>
                </div>
            </div>
        </Col>
    );
}
