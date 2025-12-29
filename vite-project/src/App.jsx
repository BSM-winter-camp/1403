import { useState } from "react";
import style from "./App.module.css";
import MessageInput from "./MessageInput.jsx";
import Modal from "./Modal/Modal.jsx";
import "./App.css";
import Message from "./message.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [messages, setMessages] = useState([
    { id: 1, text: "안녕하세요", createdAt: new Date() },
    { id: 2, text: "안녕", createdAt: new Date() },
  ]);

  return (
    <main className={style.container}>
      <section className={style.chattingSection}>
        <div className={style.messageSection}>
          {messages.map(function (msg) {
            return (
              <Message
                key={msg.id}
                id={msg.id}
                text={msg.text}
                setSelectedId={setSelectedId}
                setShowModal={setShowModal}
              />
            );
          })}
        </div>
        <MessageInput setMessages={setMessages} />
      </section>
      {showModal && (
        <Modal
          selectedId={selectedId}
          setShowModal={setShowModal}
          setMessages={setMessages}
        />
      )}
    </main>
  );
}

export default App;
