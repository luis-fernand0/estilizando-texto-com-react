import './buttons.css'

const Buttons = ({ setColor, setFont }) => {

    const changeColor = (newColor) => {
        setColor(newColor);
    }

    const changeFont = (newFont) => {
        setFont(newFont)
    }

  return (
    <>
        <div className="buttons">
            <button className="red form-button" onClick={() => {changeColor('red')}}>
                Clique aqui!
            </button>

            <button className="blue form-button" onClick={() => {changeColor('blue')}}>
                Clique aqui!
            </button>

            <button className="green form-button" onClick={() => {changeColor('green')}}>
                Clique aqui!
            </button>
        </div>

        <div className="buttons">
            <button className="capitalize text form-button" onClick={() => {changeFont('capitalize')}}>
                Letras Capitalizada
            </button>

            <button className="lowercase text form-button" onClick={() => {changeFont('lowercase')}}>
                letras minusculas
            </button>

            <button className="uppercase text form-button" onClick={() => {changeFont('uppercase')}}>
                LETRAS MAIUSCULAS
            </button>
        </div>
    </>
  )
}

export default Buttons
