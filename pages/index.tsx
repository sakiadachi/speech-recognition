import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  let recognition: SpeechRecognition | undefined = undefined;
  const [text, setText] = useState("");
  const clickStart = () => {
    const speechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    recognition = new speechRecognition();
    recognition.start();
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
      console.log(transcript);
    };
  };
  const clickStop = () => {
    if (recognition) {
      recognition.stop();
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={clickStart}>start</button>
      <button onClick={clickStop}>stop</button>
      <textarea
        name=""
        id=""
        cols={30}
        rows={10}
        value={text}
        readOnly
      ></textarea>
    </div>
  );
}
