import React from "react";
import Container from "../../components/container";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ alignItems: "center", justifyContent: "center" }}>
      <div className="content">
        <button onClick={() => navigate("/streamer")}>Vou streemar</button>
        <button onClick={() => navigate("/viewer")}>Vou assistir</button>
        <span>🦆</span>
      </div>
    </Container>
  );
};
