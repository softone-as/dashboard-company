import {
    SafetyCertificateOutlined,
    SafetyOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";
import { Row } from "antd";
import SubHeader from "../shared/SubHeader";
import LocationItem from "./LocationItem";

export default function Location() {
    return (
        <div className="location">
            <SubHeader title="Lokasi" />
            <Row gutter={[16, 16]}>
                <LocationItem
                    icon={<SafetyCertificateOutlined />}
                    total="20"
                    title="Induk"
                />
                <LocationItem
                    icon={<SafetyOutlined />}
                    total="3"
                    title="Sub Lokasi Level 1"
                />
                <LocationItem
                    icon={<ThunderboltOutlined />}
                    total="1"
                    title="Sub Lokasi Level 2"
                />
            </Row>
        </div>
    );
}
