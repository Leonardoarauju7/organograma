import './Time.css'

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const css1 = {backgroundColor: props.Primaria}
    return(
        
        <section className='time' style={css}>
            <h3 style={css1}> {props.nome}</h3>
        </section>
        
    )

}

export default Time