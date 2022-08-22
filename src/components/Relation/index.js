import SubHeader from "../shared/SubHeader";
import RelationItem from "./RelationItem";

export default function Relation() {
    return (
        <div className="relation">
            <SubHeader title="Relasi" />
            <RelationItem total={20} title="Memiliki" />
            <RelationItem total={108} title="Menggunakan" />
            <RelationItem total={67} title="Meminjam" />
        </div>
    );
}
