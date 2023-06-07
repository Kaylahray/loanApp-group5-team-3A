import ProfileData from "./Notification";
import styles from "./Dashboard.module.scss";

const Right = () => {
  return (
    <div className={styles.right}>
      <div className={styles.notify_head}>
        <h1>Notification</h1>
        <a href="/">View All</a>
      </div>

      <div className={styles.notify_nav}>
        <a href="/" className={styles.notifynav_all}>
          All
        </a>
        <a href="/" className={styles.notifynav_un}>
          Unread
        </a>
      </div>
      <div className={styles.comments}>
        <div>
          {ProfileData.map((item) => {
            return (
              <div key={item.id} className={styles.post}>
                <div>
                  <img src={item.img} className={styles.itemImg} alt="img" />
                </div>
                <div>
                  <p>
                    <strong> {item.name} </strong>{" "}
                    <span className="span">{item.text}</span>
                  </p>
                  <h4>{item.time}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Right;
