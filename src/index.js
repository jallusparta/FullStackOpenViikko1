import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <div>
    <h1>{props.otsikko}</h1>
  </div>
)

const Button = (props) => (
  <button onClick = {props.klikki} >{props.nimi}</button>
)

const Statistics = (props) => (
  <div>
    <h2>{props.aliotsikko}</h2>
    <Statistic nimi = 'Hyvä:' arvo = {props.state.hyva} />
    <Statistic nimi = 'Neutraali:' arvo = {props.state.neutraali} />
    <Statistic nimi = 'Huono:' arvo = {props.state.huono} />
    <Statistic nimi = 'Keskiarvo:' arvo = {LaskeKeskiarvo(props)} />
    <Statistic nimi = 'Positiivisia:' arvo = {Positiivisia(props) + ' %'} />
  </div>
)

const Statistic = (props) => (
  <div>
    {props.nimi} {props.arvo}
  </div>
)

const Yhteensa = (props) => props.state.hyva + props.state.neutraali + props.state.huono

const LaskeKeskiarvo = (props) => (props.state.hyva - props.state.huono) / Yhteensa(props)

const Positiivisia = (props) => (props.state.hyva / Yhteensa(props)) * 100

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1
    })
  }

  render () {
    const otsake = 'Anna palautetta'
    const aliotsake = 'Statistiikka'
    return (
      <div>
        <Otsikko otsikko = {otsake} />
        <Button klikki = {this.klikHyva} nimi = "Hyvä" />
        <Button klikki = {this.klikNeutraali} nimi = "Neutraali" />
        <Button klikki = {this.klikHuono} nimi = "Huono" />
        <Statistics state = {this.state} aliotsikko = {aliotsake} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
