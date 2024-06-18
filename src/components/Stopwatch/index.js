import {Component} from 'react'
import './index.css'

export default class Stopwatch extends Component {
  state = {minute: 0, second: 0, buttonstate: false}

  counting = () => {
    const {minute, second} = this.state
    let milliseconds = minute * 6000 + second * 1000
    milliseconds += 1000
    const updateminute = Math.floor(milliseconds / 1000 / 60)
    const updatesecond = Math.floor((milliseconds / 1000) % 60)
    this.setState({
      minute: updateminute,
      second: updatesecond,
      buttonstate: true,
    })
  }

  startcount = () => {
    const {buttonstate} = this.state
    if (buttonstate === false) {
      this.intervalcounter = setInterval(this.counting, 1000)
    }
  }

  stopcount = () => {
    clearInterval(this.intervalcounter)
    this.setState({buttonstate: false})
  }

  resetcount = () => {
    clearInterval(this.intervalcounter)
    this.setState({minute: 0, second: 0, buttonstate: false})
  }

  render() {
    const {minute, second} = this.state
    return (
      <div className="bgcontainer">
        <div className="container">
          <div>
            <h1>Stopwatch</h1>
            <div className="timercontainer">
              <div className="timerimgcontainer">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
                  alt="stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1>
                {minute<10?`0${minute}`:minute}:{second<10?`0${second}`:second}
              </h1>
              <div className="timerbuttoncontainer">
                <button
                  type="button"
                  onClick={this.startcount}
                  className="startbutton button"
                >
                  Start
                </button>
                <button
                  type="button"
                  onClick={this.stopcount}
                  className="stopbutton button"
                >
                  Stop
                </button>
                <button
                  type="button"
                  onClick={this.resetcount}
                  className="resetbutton button"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
