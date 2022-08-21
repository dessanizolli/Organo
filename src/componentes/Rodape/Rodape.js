import './Rodape.css'

const Rodape = () => {
    return (
        <div className='rodape'>
            <div className='redes'>
                <img src='../imagens/fb.png' alt='facebook'></img>
                <img src='../imagens/tw.png' alt='twitter'></img>
                <img src='../imagens/ig.png' alt='instagram'></img>
            </div>
            <img className='logo' src='../imagens/logo.png' alt='logo Organo'></img>
            <p>Desenvolvido por Alura e Andressa.</p>
        </div>
    )
}

export default Rodape