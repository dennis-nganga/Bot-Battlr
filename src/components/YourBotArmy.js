import React from "react";
import PropTypes from "prop-types";

function YourBotArmy({ botArmy, onRelease, onDischarge }) {
  const handleRelease = (botId) => {
    onRelease(botId);
  };

  const handleDischarge = (botId) => {
    onDischarge(botId);
  };

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <ul>
        {botArmy &&
          botArmy.map((bot) => (
            <li key={bot.id}>
              <div className="bot-card">
                <img src={bot.avatar_url} alt={bot.name} />
                <div className="bot-info">
                  <h3>{bot.name}</h3>
                  <p>
                    <strong>Class:</strong> {bot.bot_class}
                  </p>
                  <p>
                    <strong>Health:</strong> {bot.health}
                  </p>
                  <p>
                    <strong>Damage:</strong> {bot.damage}
                  </p>
                  <p>
                    <strong>Armor:</strong> {bot.armor}
                  </p>
                  <button onClick={() => handleRelease(bot.id)}>Release</button>
                  <button
                    className="discharge-btn"
                    onClick={() => handleDischarge(bot.id)}
                  >
                    Discharge
                  </button>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

YourBotArmy.propTypes = {
  botArmy: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      bot_class: PropTypes.string.isRequired,
      health: PropTypes.number.isRequired,
      damage: PropTypes.number.isRequired,
      armor: PropTypes.number.isRequired,
      avatar_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRelease: PropTypes.func.isRequired,
  onDischarge: PropTypes.func.isRequired,
};

export default YourBotArmy;
