import React, { useState } from "react";
import Container from "../../components/container";
import { ReactFlvPlayer } from "react-flv-player";
import "./styles.css";

export const Viewer = () => {
  const [key, setKey] = useState("");
  const [radminIp, setRadminIp] = useState("");
  const [completeUrl, setCompleteUrl] = useState("");
  const [active, setActive] = useState(false);

  const start = () => {
    if (active) {
      setActive(!active);
    } else {
      if (key.length === 0 || radminIp.length < 5) {
        alert("Digite corretamente os campos");
      } else {
        setCompleteUrl(`http://${radminIp}:8000/live/${key}.flv`);
        setActive(!active);
      }
    }
  };

  if (active) {
    return (
      <Container style={{ alignItems: "center", justifyContent: "center" }}>
        <div className="content">
          <ReactFlvPlayer
            url={completeUrl}
            heigth={350}
            width={700}
            key={"a"}
          />
          <button onClick={start} style={{ marginTop: 10 }}>
            {active ? "Parar" : "Assistir"}
          </button>
        </div>
      </Container>
    );
  } else {
    return (
      <Container style={{ alignItems: "center", justifyContent: "center" }}>
        <div className="content">
          <input
            value={key}
            onChange={(event) => {
              setKey(event.target.value);
            }}
            placeholder="Key"
            style={{ display: "flex" }}
          />
          <input
            value={radminIp}
            onChange={(event) => {
              setRadminIp(event.target.value);
            }}
            placeholder="Radmin IP"
          />
          <button onClick={start}>{active ? "Parar" : "Assistir"}</button>
        </div>
      </Container>
    );
  }
};
