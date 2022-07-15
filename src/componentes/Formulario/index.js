import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'


const Formulario = () =>{

    const times = [
        'Programação',
        'Front-end',
        'Data Science',
        'Devops',
        'Ui e Ux Design',
        'Mobile' ,
        'Inovação e Gestão'
    ]
    
    const aoSalvar = (evento) => {
        evento.preventDefault(); // evento( previne que a pagina seja carregada ao submeter o botao)
        console.log('form foi submetido')
    }
    
    return(
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite Seu Nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite Seu Cargo"/>
                <CampoTexto  label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" itens={times} />
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
    )
}

export default Formulario