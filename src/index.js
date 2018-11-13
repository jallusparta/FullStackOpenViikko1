import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => (
  <div>
    <h1>{props.name}</h1>
  </div>
)

const Osa = (props) => (
  <div>
    <p>{props.osa} {props.tehtavia}</p>
  </div>
)

const Sisalto = (props) => {
  console.log(props.osat[0].nimi)
  return(
    <div>
      <Osa osa = {props.osat[0].nimi} tehtavia = {props.osat[0].tehtavia} />
      <Osa osa = {props.osat[1].nimi} tehtavia = {props.osat[1].tehtavia} />
      <Osa osa = {props.osat[2].nimi} tehtavia = {props.osat[2].tehtavia} />
    </div>
  )
}

const Yhteensa = (props) => (
  <div>
    <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
  </div>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
    nimi: 'Reactin perusteet',
    tehtavia: 10
    },
    {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
    },
    {
    nimi: 'Komponenttien tila',
    tehtavia: 14
    }
  ]
  console.log(osat[0].nimi)
  return (
    <div>
      <Otsikko name = {kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
