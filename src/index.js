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

const Sisalto = (props) => (
  <div>
    <Osa osa = {props.osa1.nimi} tehtavia = {props.osa1.tehtavia}/>
    <Osa osa = {props.osa2.nimi} tehtavia = {props.osa2.tehtavia}/>
    <Osa osa = {props.osa3.nimi} tehtavia = {props.osa3.tehtavia}/>
  </div>
)

const Yhteensa = (props) => (
  <div>
    <p>yhteensä {props.maara} tehtävää</p>
  </div>
)

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko name = {kurssi} />
      <Sisalto osa1 = {osa1} osa2 = {osa2} osa3 = {osa3} />
      <Yhteensa maara = {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
