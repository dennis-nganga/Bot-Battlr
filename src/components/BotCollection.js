import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";


function BotCollection({ onEnlist }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error(error));
  }, []);

  const handleEnlist = (botId) => {
    onEnlist(botId);
  };

  return (
    <div >
    <h2>Bot Collection </h2>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onEnlist={handleEnlist} />
      ))}
    </div>
  );
}

export default BotCollection;
