#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use chrono::prelude::*;

#[tauri::command]
async fn start_stamp() -> String {
    let is_start = true;
    let stamp_date = Local::now().format("%Y-%m-%d %H:%M");
    let stamp_comment = if is_start {
        format!(
            "{}
おはようございます。本日の業務開始します。
よろしくお願いします。",
            stamp_date
        )
    } else {
        format!(
            "{}
お疲れ様です。本日の業務を終了します。
ありがとうございました。",
            stamp_date
        )
    };
    stamp_comment
}

#[tauri::command]
async fn end_stamp() -> String {
    let is_start = false;
    let stamp_date = Local::now().format("%Y-%m-%d %H:%M");
    let stamp_comment = if is_start {
        format!(
            "{}
  おはようございます。本日の業務開始します。
  よろしくお願いします。",
            stamp_date
        )
    } else {
        format!(
            "{}
  お疲れ様です。本日の業務を終了します。
  ありがとうございました。",
            stamp_date
        )
    };
    stamp_comment
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![start_stamp, end_stamp,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
