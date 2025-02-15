// Write your code here

import './index.css'

const MatchCard = props => {
  const {card} = props

  const cls = card.matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="team-list">
      <img
        src={card.competingTeamLogo}
        className="teamlogo"
        alt={`competing team  ${card.competingTeam}`}
      />
      <p>{card.competingTeam}</p>
      <p>{card.result}</p>
      <p className={cls}>{card.matchStatus}</p>
    </li>
  )
}

export default MatchCard
