import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import BankItem from "./BankItem";

export default function BankAccount() {
    return (
        <div className="bank-account">
            <div className="bank-header">
                <h3>Akun Bank</h3>
                <Button type="primary" icon={<PlusOutlined />}>
                    Tambah Akun Bank
                </Button>
            </div>
            <div className="bank-list">
                <BankItem
                    bank="Bank KB Bukopin"
                    identity="**** 0878 - Yusron Taufiq"
                    currency="IDR"
                />
                <BankItem
                    bank="Citibank, NA"
                    identity="**** 5525 - Si Tampan"
                    currency="USD"
                />
            </div>
        </div>
    );
}
