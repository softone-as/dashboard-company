export default function ProfileDescriptionLink({
    title,
    value,
    icon,
    underlined,
}) {
    let btnClass = "btn-custom";
    if (underlined) btnClass += " underlined";

    return (
        <div className="profile-description-link">
            <span>{title}</span>
            <a href="#" className={btnClass}>
                {icon}
                {value}
            </a>
        </div>
    );
}
