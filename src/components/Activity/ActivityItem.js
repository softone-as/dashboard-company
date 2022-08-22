export default function ActivityItem({ content, dateTime }) {
    return (
        <div className="activity-item">
            <p>{content}</p>
            <span>{dateTime}</span>
        </div>
    );
}
