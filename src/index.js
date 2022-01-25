import React, {
  useState,
  useEffect,
  useCallback,
} from "react";
import ReactDOM from "react-dom";
import "./index.css";

const FunctionComponent = () => {
  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState("");


  const sendMessage = useCallback((author = "User", msg) => {
    setMessages((messages) => [
      ...messages,
      { author: author ?? "Bot", message: msg },
    ]);
  }, []);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1]?.author === "User") {
      sendMessage("Bot", "from Bot");
    }
  }, [messages, sendMessage]);

  console.log("render", messages);

  return (
    <div>
      {messages.map((messages) => (
        <div className="message">
          <h3>{messages.author}: {messages.message}</h3>
        </div>
      ))}
      <button onClick={() => sendMessage("User", "Test")}>sendMessage</button>
    </div>
  );
};

const App = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>setVisible</button>
      {/* {visible && <ClassComponent testProps="test" />} */}
      {visible && <FunctionComponent testProps="test" />}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);