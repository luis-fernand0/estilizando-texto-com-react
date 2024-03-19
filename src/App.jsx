import React, { useState } from 'react';
import Paragrafo from './components/paragrafo/paragrafo.jsx'
import Buttons from './components/buttons/buttons.jsx'

import './App.css'

function App() {
  const [color, setColor] = useState()
  const [font, setFont] = useState()

  return (
    <>
      <Paragrafo color={color} font={font} />
      <p>Escolha a cor e tipo do seu texto</p>
      <Buttons setColor={setColor} setFont={setFont}/>
    </>
  )
}

export default App
