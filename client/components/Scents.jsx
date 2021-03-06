import React from 'react'
import { connect } from 'react-redux'
import { getScents } from '../api'
import { fetchScents } from '../actions'

class Scents extends React.Component {
  componentDidMount() {
    getScents()
      .then((scents) => {
        this.props.dispatch(fetchScents(scents))
      })
      .catch((err) => {
        res.status(500).send('Its the Error Message for me!')
      })
  }
  render() {
    return (
      <div className="infoContainer">
        <h1 className='pageHeader'>Scents Available</h1>
        <ul>
          {this.props.scents.map((scent) => {
            const { id, name } = scent
            return <li className="scentsList" key={id}>- {name}</li>
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    scents: state.scents,
  }
}

export default connect(mapStateToProps)(Scents)
