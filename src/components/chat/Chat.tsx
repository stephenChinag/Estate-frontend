import steph from "../../assets/steph.jpg";
import "./chat.scss";
export default function Chat() {
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
      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img />
            Stephen
          </div>
          <span className="close"> x</span>
        </div>
        <div className="center">
          <div className="chatMessage">
            <p>adbf sfjkjgbjbjfbf vjksfjbf</p>
            <span> 1 hour ago</span>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
