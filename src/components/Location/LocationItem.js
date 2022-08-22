import { Col } from "antd";

export default function LocationItem({ icon, total, title }) {
    return (
        <Col lg={8} md={24} sm={24} xs={24}>
            <div className="location-item">
                {icon}
                <div className="total total-location">
                    <span>{total}</span>
                    <p>{title}</p>
                </div>
            </div>
        </Col>
    );
}
