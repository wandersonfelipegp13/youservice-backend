import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { useState, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

import "../styles/auth.scss";
import "../styles/input-container.scss";
import "../styles/profile.scss";

export function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");

  async function handleSaveUser(event: FormEvent) {
    event.preventDefault();

    if (userName.trim() === "") {
      showErrorToast("Insira seu nome");
      return;
    }

    if (userPhone.trim() === "") {
      showErrorToast("Insira seu telefone");
      return;
    }

    if (userEmail.trim() === "") {
      showErrorToast("Insira seu email");
      return;
    }

    navigate('/home')
  }

  function showErrorToast(message: String) {
    toast.error(message.toString(), {
      style: {
        color: "#101010",
        background: "#FBFF35",
      },
      iconTheme: {
        primary: "#101010",
        secondary: "#FBFF35",
      },
    })
  }

  return (
    <main id="page-auth">
      <img src={logoImg} alt="YouService" />
      {user != null ? <h2>Edição de Perfil</h2> : <h2>Crie um conta</h2>}
      <form className="container-auth" onSubmit={handleSaveUser}>
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
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="input-container">
          <span className="material-icons">phone</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Telefone"
            onChange={(event) => setUserPhone(event.target.value)}
          />
        </div>
        <div className="input-container">
          <span className="material-icons">mail</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={(event) => setUserEmail(event.target.value)}
          />
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
        <Button type="submit">{user == null ? "Cadastrar" : "Salvar"}</Button>
        {user == null ? (
          <Link to="/login">
            Já tem uma conta? <span>Entre aqui</span>
          </Link>
        ) : (
          <></>
        )}
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </main>
  );
}
