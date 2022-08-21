import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Rodape from './componentes/Rodape/Rodape';
import Time from './componentes/Time/Time';

function App() {

  const times = [
    {
      nome: 'Família',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Faculdade',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Trabalho',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Amigos',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE95F5',
    },
    {
      nome: 'Clientes',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  //colaboradores antigos + novo colaborador
  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map(time =>
        <Time key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
          //colaboradores devem ter time do colaborador do form igual ao colaborador nome do espaço
        />)}
      
      <Rodape />

    </div>
  );
}

export default App;
