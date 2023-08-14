/*

CONTROLLED INPUTS

- SUBMIT

No queremos que el submit recarge la página, así que conectamos
un handleSubmit al onSubmit de nuestro formulario.

Dentro del handleSubmit empezamos impidiendo la recarga con
e.preventDefault()
A partir de ahí, escribimos la lógica de validación y envío
que necesitemos

- CHANGE

Debemos controlar el value y onChange de cada input. Por tanto,
tras crear el input debemos crear:

1. Un estado, que asignaremos al value del input
2. Un handler, que asignaremos al onChange del input y cuyo
   objetivo es actualizar el estado asociado al input

Hecho esto, podemos utilizar el valor de cada input dentro de
nuestro handleSubmit

- OBJETOS

Podemos utilizar un único estado para gestionar todos los
inputs. Para ello:

1. Definimos el estado inicial de nuestro form. Será un objeto
   con una clave por cada input. Ejemplo:

const initialState = {
  name: '',
  surnames: '',
  age: ''
};

2. Creamos el estado. Ejemplo:

const [userInput, setUserInput] = useState(initialState);

3. Creamos el handler. Ejemplo:

const handleUserInput = e => {
  setUserInput(prev => { ...prev, [e.target.name]: e.target.value })
}

4. Asociamos a cada input su estado y el handler. Ejemplo:

<input
  name="surnames"
  value={userInput.name}
  onChange={handleUserInput}
/>

*/

import { useState } from 'react'
import './App.css'

// Esto iría en un utils:
const initialState = {
  userName: '',
  password: '',
  age: ''
};

function App() {
  const [color, setColor] = useState('black');
  const [userInput, setUserInput] = useState(initialState);
  // const [userName, setUserName] = useState('');
  // const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = e => {
    e.preventDefault(e);

    // if (userName.length < 8) {
    //   alert('El nombre de usuario debe tener al menos 9 caracteres');
    //   return;
    // }
     if (userInput.userName.length < 8) {
       alert("El nombre de usuario debe tener al menos 9 caracteres");
       return;
     }

    // if (password)

    // alert(userName);
    // alert(userInput.userName);
    console.log(userInput)

    setUserInput(initialState);
  }

  // const handleUserInput = e => setUserName(e.target.value);
  // const handlePasswordInput = e => setPassword(e.target.value);

  const handleUserInput = (e) => {
    setUserInput(prev => {
      return { ...prev, [e.target.id]: e.target.value }
    });
  };

  const handleToggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
      >
        <div>
          <label htmlFor="userName">User name</label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={userInput.userName}
            onChange={handleUserInput}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type={isVisible ? "text" : "password"}
            id="password"
            name="password"
            value={userInput.password}
            onChange={handleUserInput}
          />
        </div>

        <div>
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userInput.age}
            onChange={handleUserInput}
          />
        </div>

        <button onClick={handleToggleVisibility} type="button">
          Ver
        </button>
        <input type="submit" value="Guardar" />
      </form>
      <div style={{ backgroundColor: color }}>
        <button onClick={() => setColor("red")}>Cambiar color</button>
        {/* <h1>{userName}</h1> */}
      </div>
    </>
  );
}

export default App
