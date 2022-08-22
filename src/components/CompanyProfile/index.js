import {
    EditOutlined,
    GlobalOutlined,
    MailOutlined,
    PhoneOutlined,
} from "@ant-design/icons";
import { Button, Col, Switch } from "antd";
import banner from "./../../assets/banner.jfif";
import profilePicture from "./../../assets/logo_mig.jfif";
import ProfileDescription from "./ProfileDescription";
import ProfileDescriptionLink from "./ProfileDescriptionLink";

export default function CompanyProfile() {
    return (
        <Col lg={6} md={10} sm={24} xs={24} className="company-profile">
            <img src={banner} alt="banner" />
            <div className="company-profile-header">
                <img src={profilePicture} alt="profile" />
                <div className="company-name">
                    <h3>Mitramas Infosys Global</h3>
                    <p>Layanan IT</p>
                </div>
                <Button
                    type="link"
                    icon={<EditOutlined />}
                    size={"small"}
                    className="edit-profile"
                >
                    Sunting Profil
                </Button>
            </div>
            <div className="profile-description-status">
                <span>Status Perusahaan</span>
                <div className="company-status">
                    <p>Aktif</p>
                    <Switch
                        checked={true}
                        onChange={() => {
                            console.log("tes");
                        }}
                    />
                </div>
            </div>
            <ProfileDescription title={"Singkatan"} value="MIG" />
            <ProfileDescription
                title="Alamat Perusahaan"
                value="Jl. Tebet Raya No.44, Jakarta Selatan"
            />
            <ProfileDescription title="Penanggung Jawab" value="John Doe" />
            <ProfileDescription title="Tanggal PKP" value="03 Maret 2021" />
            <ProfileDescriptionLink
                title="E-mail"
                value="mig@mitrasolusi.group"
                icon={<MailOutlined />}
                underlined
            />
            <ProfileDescriptionLink
                title="No.Telp"
                value="021-5678-1234"
                icon={<PhoneOutlined />}
            />
            <ProfileDescriptionLink
                title="Situs Web"
                value="mitramas.com"
                icon={<GlobalOutlined />}
                underlined
            />
        </Col>
    );
}
