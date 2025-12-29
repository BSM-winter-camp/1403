import styles from "./Message.module.css";

function Message({ id, text, setSelectedId, setShowModal }) {
  const handleDeleteClick = (e) => {
    setSelectedId(id);
    setShowModal(true);
  };
  return (
    <div className={styles.message}>
      {text}
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

export default Message;
