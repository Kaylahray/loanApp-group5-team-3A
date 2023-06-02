export default function ReceivedMesssage({ message }) {
    return (
      <div className="received-msg">
        <span className="text">
          { message }
        </span>
      </div>
    );
}