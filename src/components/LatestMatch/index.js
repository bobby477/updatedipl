// Write your code here

import './index.css'

const LatestMatch = props => {
  const {details} = props

  return (
    <div className="latest-container">
      <div className="left-container">
        <p>{details.competingTeam}</p>
        <p>{details.date}</p>
        <p>{details.venue}</p>
        <p>{details.result}</p>
      </div>
      <div>
        <img
          src={details.competingTeamLogo}
          className="logo-img"
          alt={`latest match ${details.competingTeam}`}
        />
      </div>
      <div className="right-container">
        <p>First Innings</p>
        <p>{details.firstInnings}</p>
        <p>Second Innings</p>
        <p>{details.secondInnings}</p>
        <p>Man Of Thw Match</p>
        <p>{details.manOfTheMatch}</p>
        <p>umpires</p>
        <p>{details.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
