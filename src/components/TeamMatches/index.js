// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTeam()
  }

  getTeam = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const updated = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {latestMatchDetails} = updated

    const obj1 = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const {recentMatches} = updated

    const obj2 = recentMatches.map(each => ({
      umpires: each.umpires,
      result: each.result,
      manOfTheMatch: each.man_of_the_match,
      id: each.id,
      data: each.date,
      venue: each.venue,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      matchStatus: each.match_status,
    }))

    const newUpdated = {
      teamBannerUrl: updated.teamBannerUrl,
      latestMatchDetails: obj1,
      recentMatches: obj2,
    }

    this.setState({teamDetails: newUpdated, isLoading: false})
  }

  render() {
    const {teamDetails, isLoading} = this.state

    const {match} = this.props

    const {params} = match

    const {id} = params

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`bg-container2 ${id}`}>
            <img
              src={teamDetails.teamBannerUrl}
              className="banner-img"
              alt="team banner"
            />
            <div className="match-card1">
              <p className="para2">Latest Matches</p>
              <div>
                <LatestMatch details={teamDetails.latestMatchDetails} />
              </div>
              <ul className="match-card">
                {teamDetails.recentMatches.map(each => (
                  <MatchCard card={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default TeamMatches
