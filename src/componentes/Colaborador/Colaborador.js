import './Colaborador.css'

//outra alternativa sem usar o props:
const Colaborador = ({nome, imagem, cargo, corDeFundo}) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='infos'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador