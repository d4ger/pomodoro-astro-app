// src/components/switchers/CardSwitcher.jsx
import React, { useState } from "react";
import CardFocus from "../CardFocus.astro";
import CardBreak from "../CardBreak.astro";
import CardLongBreak from "../cardlongbreak.astro";

const CardSwitcher = () => {
  const [activeCard, setActiveCard] = useState("focus");

  const renderCard = () => {
    switch (activeCard) {
      case "focus":
        return <CardFocus />;
      case "break":
        return <CardBreak />;
      case "longBreak":
        return <CardLongBreak />;
      default:
        return <CardFocus />;
    }
  };

  return (
    <div>
      <div className="button-group">
        <button
          onClick={() => setActiveCard("focus")}
          className={activeCard === "focus" ? "active" : ""}
        >
          Focus
        </button>
        <button
          onClick={() => setActiveCard("break")}
          className={activeCard === "break" ? "active" : ""}
        >
          Break
        </button>
        <button
          onClick={() => setActiveCard("longBreak")}
          className={activeCard === "longBreak" ? "active" : ""}
        >
          Long Break
        </button>
      </div>
      {renderCard()}
    </div>
  );
};

export default CardSwitcher;
