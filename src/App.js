import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import './App.css'

function App() {
  const [botCollection, setBotCollection] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/bots")
      .then((response) => response.json())
      .then((data) => setBotCollection(data))
      .catch((error) => console.error(error));
  }, []);

  const handleEnlist = (botId) => {
    const bot = botCollection.find((bot) => bot.id === botId);
    if (botArmy.find((b) => b.id === bot.id)) {
      alert("This bot is already enlisted in your army!");
    } else {
      setBotArmy([...botArmy, bot]);
    }
  };

  const handleRelease = (botId) => {
    const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
    setBotArmy(updatedArmy);
  };

  const handleDischarge = (botId) => {
    fetch(`http://localhost:4000/bots/${botId}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
        setBotArmy(updatedArmy);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
    <YourBotArmy
        onRelease={handleRelease}
        onDischarge={handleDischarge}
        botArmy={botArmy}
      />
      <BotCollection onEnlist={handleEnlist} bots={botCollection} />
      
    </div>
  );
}

export default App;
