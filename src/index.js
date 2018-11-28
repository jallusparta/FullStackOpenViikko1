import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <div>
    <h1>{props.otsikko}</h1>
  </div>
)

const Alaotsikko = (props) => (
  <div>
    <h2>{props.aliotsikko}</h2>
  </div>
)

const Statistiikka = (props) => (
  <div>
    <p>Hyvä: {props.state.hyva} </p>
    <p>Neutraali: {props.state.neutraali} </p>
    <p>Huono: {props.state.huono} </p>
    <p>Keskiarvo: {LaskeKeskiarvo(props)} </p>
    <p>Positiivisia: {Positiivisia(props)} %</p>
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
        <button onClick = {this.klikHyva} >Hyvä</button>
        <button onClick = {this.klikNeutraali}>Neutraali</button>
        <button onClick = {this.klikHuono}>Huono</button>
        <Alaotsikko aliotsikko = {aliotsake} />
        <Statistiikka state = {this.state} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
