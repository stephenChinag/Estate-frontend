import { useState } from "react";
import steph from "../../assets/steph.jpg";
import "./chat.scss";
export default function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1> Message</h1>
        <div className="message">
          <img src={steph} alt="" />
          <span>Stephen</span>
          <p>
            This the first chat componetnt ty it out check what the possibility{" "}
          </p>
        </div>
        <div className="message">
          <img src={steph} alt="" />
          <span>Stephen Chinag</span>
          <p>
            This the first chat componetnt ty it out check what the possibility{" "}
          </p>
        </div>
        <div className="message">
          <img src={steph} alt="" />
          <span>Stephen Chinag</span>
          <p>
            This the first chat componetnt ty it out check what the possibility{" "}
          </p>
        </div>
        <div className="message">
          <img src={steph} alt="" />
          <span>Stephen Chinag</span>
          <p>
            This the first chat componetnt ty it out check what the possibility{" "}
          </p>
        </div>
        <div className="message">
          <img src={steph} alt="" />
          <span>Stephen Chinag</span>
          <p>
            This the first chat componetnt ty it out check what the possibility{" "}
          </p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src={steph} />
              Stephen
            </div>
            <span
              className="close"
              onClick={() => {
                setChat(false);
              }}
            >
              {" "}
              x
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>adbf sfjkjgbjbjfbf vjksfjbf</p>
              <span> 1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>adbf sfjkjgbjbjfbf vjksfjbf</p>
              <span> 1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>adbf sfjkjgbjbjfbf vjksfjbf</p>
              <span> 1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>adbf sfjkjgbjbjfbf vjksfjbf</p>
              <span> 1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea placeholder="enter your message" />
            <button> Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
