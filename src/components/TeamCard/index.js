// Write your code here

import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {content} = props
  const {id} = content

  return (
    <Link to={`/team-matches/${id}`} className="link-container">
      <li className="liorder">
        <img
          src={content.teamImageUrl}
          alt={content.name}
          className="team-img"
        />
        <p className="para">{content.name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
