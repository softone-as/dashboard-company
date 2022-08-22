import { Breadcrumb } from "antd";

export default function Breadcrumbs() {
    return (
        <Breadcrumb
            style={{
                margin: "16px 0",
            }}
        >
            <Breadcrumb.Item>Perusahaan</Breadcrumb.Item>
            <Breadcrumb.Item>Mitramas Infosys Global</Breadcrumb.Item>
        </Breadcrumb>
    );
}
