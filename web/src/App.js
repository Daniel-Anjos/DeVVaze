import React, { useState } from 'react';

//Componente: Bloco isolado de HTML, CSS e JS que não interfere no restante da aplicação
//Propriedade: Informações que um componente pai passa para o componente filho
//Estado: Informação mantidas/manipuladas pelo componente (Conceito de Imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);
  function incrementCounter(){
    setCounter(counter + 1 );
    alert('Fala cmgo bb');
  }

  return (
    <>
      <h1>Contador: {counter} </h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
