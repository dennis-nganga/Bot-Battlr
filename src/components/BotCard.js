import React from "react";

function BotCard({ bot, onEnlist }) {
  const handleEnlist = () => {
    onEnlist(bot.id);
  };

  return (
    <div className="bot-card">
     <table className="bot-card">
  <tbody>
    <tr>
      <td><img src={bot.avatar_url} alt={bot.name} /></td>
      <td>
        <h2>{bot.name}</h2>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <button onClick={handleEnlist}>Enlist</button>
      </td>
    </tr>
  </tbody>
</table>

    </div>
  );
}

export default BotCard;