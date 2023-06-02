export default function SentMessage({ message }) {
    return (
      <div className="sent-msg">
        <span className="text">{ message }</span>
      </div>
    );
}