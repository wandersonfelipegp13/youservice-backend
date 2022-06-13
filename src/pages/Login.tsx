import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/auth.scss";
import "../styles/input-container.scss";

export function Login() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();

  async function signIn() {
    if(!user) {
      await signInWithGoogle();
    }
    navigate("/home");
  }

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
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
        </div>
        <Button onClick={signIn}>Entrar</Button>
        <Link to="/">
          Não tem uma conta? <span>Cadastre-se</span>
        </Link>
      </div>
    </main>
  );
}
