import { Col, Row } from "antd";
import Activity from "../components/Activity";
import BankAccount from "../components/BankAccount";
import CompanyProfile from "../components/CompanyProfile";
import Location from "../components/Location";
import Relation from "../components/Relation";

export default function Dashboard() {
    return (
        <>
            <Row className="content">
                <CompanyProfile />
                <Col
                    lg={{ span: 17, offset: 1 }}
                    md={{ span: 12, offset: 2 }}
                    sm={24}
                >
                    <Location />
                    <Row className="wrapper">
                        <Col lg={12} sm={24} className="section-left">
                            <BankAccount />
                            <Relation />
                        </Col>
                        <Col lg={12} sm={24} className="section-right">
                            <Activity />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}
