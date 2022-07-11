import { Link } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import { useAuth } from "../hooks/useAuth";

import "../styles/home.scss";
import whatsappIcon from "../assets/images/whatsapp.svg";

export function Home() {
  const { user } = useAuth();

  function hidePopup() {
    var popup = document.getElementById("service-popup");
    if (popup) popup.style.display = "none";
  }

  function showPopup() {
    var popup = document.getElementById("service-popup");
    if (popup) popup.style.display = "flex";
  }

  return (
    <main id="page-home">
      <div id="service-popup">
        <div id="popup-content">
          <div id="popup-container">
            <span
              onClick={hidePopup}
              id="popup-close"
              className="material-symbols-rounded"
            >
              close
            </span>

            <div id="details">
              <div id="main-info">
                <img src={user?.avatar} alt="Service" />

                <div id="contact-details">
                  <span id="popup-name">{user?.name}</span>
                  <div id="popup-price">
                    <span id="popup-label">R$</span>
                    <span id="popup-value">32,00</span>
                  </div>
                  <span id="popup-phone">
                    <span className="material-icons-round">phone</span>
                    (64) 99299-9999
                  </span>
                  <span id="popup-mail">
                    <span className="material-icons-round">email</span>
                    contact@mail.com
                  </span>
                </div>
              </div>

              <span id="description">
                Poda de grama, cortagem de árvores, capinagem, plantio de grama.
              </span>
            </div>
          </div>

          <a
            id="contact"
            href="https://web.whatsapp.com/send?phone=5564999083524&text=Olá tenho interesse em seus serviços."
            target="_blank" rel="noreferrer"
          >
            <span>Entrar em contato no Whatsapp</span>
            <img src={whatsappIcon} alt="Whatsapp" />
          </a>
        </div>
      </div>

      <MenuBar>
        <Link to="/" className="menu-link menu-exit">
          <span className="material-symbols-rounded">logout</span>
          Sair
        </Link>
        <Link to="/" className="menu-link">
          <span className="material-symbols-rounded">format_list_bulleted</span>
          Meus Serviços
        </Link>
        <img
          src={user?.avatar}
          alt="Foto de perfil"
          className="photo-profile"
        />
      </MenuBar>
      <div className="home-content">
        <div className="filters-container container">
          <h3>Categoria</h3>
          <div className="categories">
            <div className="category">
              <label className="custom-radio-button">
                <input type="radio" name="category" id="jardinagem" />
                <span className="checkmark"></span>
              </label>
              <label className="category-name" htmlFor="jardinagem">
                Jardinagem
              </label>
            </div>

            <div className="category">
              <label className="custom-radio-button">
                <input type="radio" name="category" id="Eletricista" />
                <span className="checkmark"></span>
              </label>
              <label className="category-name" htmlFor="Eletricista">
                Eletricista
              </label>
            </div>
            <div className="category">
              <label className="custom-radio-button">
                <input type="radio" name="category" id="Faxina" />
                <span className="checkmark"></span>
              </label>
              <label className="category-name" htmlFor="Faxina">
                Faxina
              </label>
            </div>
            <div className="category">
              <label className="custom-radio-button">
                <input type="radio" name="category" id="foto" />
                <span className="checkmark"></span>
              </label>
              <label className="category-name" htmlFor="foto">
                Fotógrafo
              </label>
            </div>
          </div>
          <h3>Cidade</h3>
          <div className="city">
            <select name="uf" placeholder="UF">
              <option value="">UF</option>
              <option value="go">GO</option>
            </select>
            <select name="city" placeholder="Cidade">
              <option value="">Cidade</option>
              <option value="urutai">Urutaí</option>
            </select>
          </div>
          <h3>Preço</h3>
          <div className="price">
            <div className="price-range" id="price-min">
              <span>R$</span>
              <input type="number" name="min" id="" placeholder="Min." />
            </div>
            <div className="price-range" id="price-max">
              <span>R$</span>
              <input type="number" name="max" id="" placeholder="Max." />
            </div>
            <div id="price-button">
              <span className="material-icons-round">arrow_forward_ios</span>
            </div>
          </div>
        </div>
        <div id="services">
          <div className="service" id="service-01" onClick={showPopup}>
            <img src={user?.avatar} alt="Service" />
            <div className="service-content">
              <span className="service-name">{user?.name}</span>
              <div className="service-price">
                <span className="price-label">R$</span>
                <span className="price-value">32,00</span>
              </div>
              <span className="service-description">
                Poda de grama, cortagem de árvores, capinagem, plantio de
                grama...
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
