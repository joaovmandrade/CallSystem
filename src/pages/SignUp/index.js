import logo from "../../assets/logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"
import "./signup.css"

export default function Signup() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    if(name !== "" || email !== "" || password !== ""){
      
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo Call System"/>
        </div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <input
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Acessar" />
        </form>

        <Link to="/">Já possui uma conta? Faça o login</Link>
      </div>
    </div>
  )
}
