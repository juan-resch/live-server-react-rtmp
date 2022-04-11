import React, { useState } from "react";
import Container from "../../components/container";
import "./styles.css";

export const Streamer = () => {
  const [key, setKey] = useState("");
  return (
    <Container style={{ alignItems: "center", justifyContent: "center" }}>
      <div className="content">
        <input
          value={key}
          onChange={(event) => {
            setKey(event.target.value);
          }}
          placeholder="Digite uma Key"
        ></input>
        <span>
          Server: rtmp://localhost/live
          <br />
          Key: {key}
        </span>
        <span style={{ marginTop: 20 }}>
          Compartilhe sua key para que outros te assistam. <br />
          <br />
          (inicie o servidor antes de compartilhar sua key 🦆)
        </span>
      </div>
    </Container>
  );
};
