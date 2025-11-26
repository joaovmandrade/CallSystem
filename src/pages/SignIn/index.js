import { useState, useContext } from 'react';
import './signin.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function Signin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useContext(AuthContext);

  function handleSignIn(e){
    e.preventDefault();

    if(email !== '' || password !== ''){
      signIn(email, password);
    }
  }

  return(
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logo} alt="Logo Call System" />
        </div>

        <form onSubmit={handleSignIn}>
          <h1>Entrar</h1>
          <input 
            type="text" 
            placeholder="Usuário" 
            value={email} 
            onChange={ (e) => setEmail(e.target.value) }
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={ (e) => setPassword(e.target.value) }
          />
          <input type="submit" value="Acessar" />
        </form>

        <Link to="/register">Não possui uma conta? Cadastre-se</Link>

      </div>
    </div>
  );
}