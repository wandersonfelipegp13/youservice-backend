import { useNavigate } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";

import "../styles/service-list.scss";

export function ServiceList() {
  const navigate = useNavigate();

  function backHome() {
    navigate("/home");
  }

  function editService() {
    navigate("/services/new");
  }

  return (
    <main id="page-new-service">
      <MenuBar></MenuBar>
      <div className="service-list-container">
        <div id="service-list-title">
          <span className="material-icons-round" onClick={backHome}>
            arrow_back
          </span>
          <h2 id="service-list-title-message">Meus serviços</h2>
        </div>
        <div id="service-list">
          <div className="service-info" onClick={editService}>
            <div className="service-resume">
              <span className="service-category">Jardinagem</span>
              <span className="service-description">
                Poda de grama, cortagem de árvores, capinagem, plantio de...
              </span>
            </div>
            <span className="service-list-price">R$ 32,00</span>
          </div>

          <div className="service-info" onClick={editService}>
            <div className="service-resume">
              <span className="service-category">Jardinagem</span>
              <span className="service-description">
                Poda de grama, cortagem de árvores, capinagem, plantio de...
              </span>
            </div>
            <span className="service-list-price">R$ 32,00</span>
          </div>

          <div className="service-info" onClick={editService}>
            <div className="service-resume">
              <span className="service-category">Jardinagem</span>
              <span className="service-description">
                Poda de grama, cortagem de árvores, capinagem, plantio de...
              </span>
            </div>
            <span className="service-list-price">R$ 32,00</span>
          </div>
        </div>
      </div>
    </main>
  );
}
