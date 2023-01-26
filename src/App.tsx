import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { writeText } from '@tauri-apps/api/clipboard'; 
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");

  const handleClickInvokeStamp = async (key: "end_stamp" | "start_stamp") => {
    setMessage(await invoke(key));
  };

  const handleClickClipboard = async () => {
    //  write to clipboard
    await writeText(message);
  };

  return (
    <div className="container">
      <h1>Welcome to ChronoStamp</h1>

      <p>各ボタンで出退勤のタイムスタンプコメントを生成します</p>

      <div className="row">
        <div>
          <button
            type="button"
            onClick={() => handleClickInvokeStamp("start_stamp")}
          >
            出勤
          </button>
          <button type="button" onClick={() => handleClickInvokeStamp("end_stamp")}>
            退勤
          </button>
        </div>
      </div>

      <p>{message}</p>

      <button type="button" onClick={handleClickClipboard}>
        Clipboardにコピーする
      </button>
    </div>
  );
};


export default App;

