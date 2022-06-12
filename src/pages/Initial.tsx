import { useNavigate } from "react-router-dom";

import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

import "../styles/initial.scss";

export function Initial() {
  const navigate = useNavigate();

  function navigateToLogin() {
    navigate('login')
  }

  return (
    <main id="page-initial">
      <img src={logoImg} alt="YouService" />
      <h2>Sua plataforma de contratação e venda de serviços</h2>
      <h3>Ache ou divulge seus serviços sem dificuldade :)</h3>
      <div>
        <Button onClick={navigateToLogin}>Entrar</Button>
      </div>
    </main>
  );
}
