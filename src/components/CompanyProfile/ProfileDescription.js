export default function ProfileDescription({ title, value }) {
    return (
        <div className="profile-description">
            <span>{title}</span>
            <p>{value}</p>
        </div>
    );
}
