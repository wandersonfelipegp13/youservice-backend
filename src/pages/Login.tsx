import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import '../styles/auth.scss'

export function Login() {
  return (
    <main id="page-auth">
      <img src={logoImg} alt="YouService" />
      <h2>Entre na plataforma</h2>
      <div className="container-auth">
        <div className="input-container">
            <span className="material-icons">mail</span>
            <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="input-container">
            <span className="material-icons">lock</span>
            <input type="password" name="password" id="password" placeholder="Senha" />
        </div>
        <Button type="submit">Entrar</Button>
        <a href="/">Não tem uma conta? <span>Cadastre-se</span></a>
      </div>
    </main>
  );
}
