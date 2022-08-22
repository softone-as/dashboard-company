import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export default function BankItem({ bank, identity, currency }) {
    let bankClass = "card-bank";
    if (bank === "Citibank, NA") bankClass += " card-bank-na";

    return (
        <div className="bank-item">
            <div className={bankClass}>
                <span>VISA</span>
            </div>
            <div className="card-bank-description">
                <h4>{bank}</h4>
                <p>
                    {identity} <br />
                    {currency}
                </p>
            </div>
            <div className="card-bank-action">
                <EditOutlined />
                <DeleteOutlined />
            </div>
        </div>
    );
}
