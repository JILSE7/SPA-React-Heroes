import React from 'react'
import './login.css'
export const LoginScreen = ({history}) => {
    console.log(history);
    const handleLogin = ()=>{
        //History.push('ruta a la que vamos a navegar');
        // history.push('/')

        //replace, es igual al push solo que ya no podremos volver a la pagina de donde empezamos a navegar
        history.replace('/');
    }
    return (
        <div className="container mt-5">
          <h1 className="text-center">Heroes App</h1>  

          <img className="gif" src="https://media.giphy.com/media/10bKPDUM5H7m7u/giphy.gif"></img>

          <button className="btn btn-success d-block m-auto" onClick={handleLogin}>Log In</button>
        </div>
    )
}
