import ActivityItem from "./ActivityItem";

export default function Activity() {
    return (
        <div className="activity">
            <h3>Aktivitas</h3>
            <ActivityItem
                content="Yusron baru saja menambahkan lokasi baru Kantor Cabang
                    Jagakarsa"
                dateTime="Hari ini, 08:00"
            />
            <ActivityItem
                content="Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk
                    Kantor Cabang Tebet"
                dateTime="Kemarin, 17:32"
            />
            <ActivityItem
                content="Yusron melakukan perubahan profil pada induk Kantor Cabang
                    Bekasi"
                dateTime="Kemarin, 17:32"
            />
        </div>
    );
}
