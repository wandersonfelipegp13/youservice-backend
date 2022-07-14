import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

import "../styles/auth.scss";
import "../styles/input-container.scss";
import "../styles/profile.scss";

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  function saveProfile() {
      navigate('/home')
  }

  return (
    <main id="page-auth">
      <img src={logoImg} alt="YouService" />
      {user != null ? <h2>Edição de Perfil</h2> : <h2>Crie um conta</h2>}
      <div className="container-auth">
        <div className="profile-photo">
          {user != null ? (
            <img src={user.avatar} alt={user.name} />
          ) : (
            <span className="material-icons-round">add_photo_alternate</span>
          )}
        </div>
        <div className="input-container">
          <span className="material-icons">person</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
          />
        </div>
        <div className="input-container">
          <span className="material-icons">phone</span>
          <input type="tel" name="phone" id="phone" placeholder="Telefone" />
        </div>
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
        <Button onClick={saveProfile}>{user == null ? "Cadastrar" : "Salvar"}</Button>
        {user == null ? (
          <Link to="/login">
            Já tem uma conta? <span>Entre aqui</span>
          </Link>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
