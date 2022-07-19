import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";



function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria:'#09f7e6',
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82cffa',
      corSecundaria:'#e8f8ff',
    },
    {

      nome: 'Data Science',
      corPrimaria: '#a6d157',                  
      corSecundaria:'#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#e06b69',
      corSecundaria:'#fde7e8',
    },
    {
      nome: 'Ui e Ux Design',
      corPrimaria: '#db6ebf',
      corSecundaria:'#fae9f5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#ffba05',
      corSecundaria:'#fff5d9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#ff8a29',
      corSecundaria:'#ffeedf',
    }

  ]

  

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => { //colaborador que acabou de chegar ta sendo colocado no array.
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      
      {times.map( time => <Time 
        key = {time.nome} 
        nome={time.nome} 
        corPrimaria={Time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      
     
    </div>
  );
}

export default App;


