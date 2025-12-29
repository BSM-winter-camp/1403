import styles from "./Modal.module.css";

function Modal({ selectedId, setShowModal, setMessages }) {

  const handleConfirmClick = () => {
    setMessages((prev) => prev.filter((msg) => msg.id !== selectedId));
    setShowModal(false);
  }

  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <section className={styles.container}>
      <span>정말 삭제하시겠습니까?</span>
      <div className={styles.buttonContainer}>
        <button onClick={handleCancelClick}>취소</button>
        <button onClick={handleConfirmClick}>확인</button>
      </div>
    </section>
  );
}

export default Modal;
