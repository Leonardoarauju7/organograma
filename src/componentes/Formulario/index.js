import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import './Formulario.css'
import { useState } from 'react'


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

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault(); // evento( previne que a pagina seja carregada ao submeter o botao)
        console.log('form foi submetido', nome , cargo, imagem, time)
    }
    
    return(
        <section className="formulario">

            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite Seu Nome"
                    valor = {nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite Seu Cargo"
                    valor = {cargo}
                    aoAlterado={valor => setCargo(valor)}
                 />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={times} 
                    valor = {time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
    )
}

export default Formulario