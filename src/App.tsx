import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [StartstampMsg, StartStamp] = useState("");
  const [EndstampMsg, EndStamp] = useState("");
  
  async function end_stamp() {
      EndStamp(await invoke("end_stamp"));
 }

  async function start_stamp() {
      StartStamp(await invoke("start_stamp"));
 }

  return (
    <div className="container">
      <h1>Welcome to ChronoStamp</h1>

      <p>各ボタンで出退勤のタイムスタンプコメントを生成します</p>

      <div className="row">
        <div>
          <button type="button" onClick={() => start_stamp()}>
            出勤
          </button>
          <button type="button" onClick={() => end_stamp()}>
            退勤
          </button>
        </div>
      </div>
      <p>{EndstampMsg}</p>
      <p>{StartstampMsg}</p>
    </div>
  );
}

export default App;

