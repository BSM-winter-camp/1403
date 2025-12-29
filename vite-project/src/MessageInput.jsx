import styles from "./MessageInput.module.css";
import { useState, useRef, useEffect } from "react";

function MessageInput({ setMessages }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();
  const handleSendMessageClick = () => {
    setMessages((prev) => {
      return [
        ...prev,
        {
          id: prev.length + 1,
          text: inputValue,
          createdAt: new Date(),
        },
      ];
    });
    setInputValue("");
  };

  useEffect(() => {
    if (!inputRef.current) return;
    const handleInputEvent = (e) => {
      if (e.code === "Enter") {
        handleSendMessageClick();
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="메시지를 입력하세요"
      />
      <button
        onClick={() => {
          if (inputValue === "") {
            return;
          } else {
            setMessages((prev) => {
              return [
                ...prev,
                {
                  id: prev.length + 1,
                  text: inputValue,
                  createdAt: new Date(),
                },
              ];
            });
            setInputValue("");
          }
        }}
      >
        전송
      </button>
    </div>
  );
}

export default MessageInput;
