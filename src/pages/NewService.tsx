import { useAuth } from "../hooks/useAuth";

import "../styles/new-service.scss";
import "../styles/input-container.scss";
import { Button } from "../components/Button";
import { DangerButton } from "../components/DangerButton";
import { MenuBar } from "../components/MenuBar";

export function NewService() {
  const { user } = useAuth();

  return (
    <main id="page-new-service">
      <MenuBar></MenuBar>
      <div className="page-container">
        <h2>Criar um novo serviço</h2>
        <form>
          <div className="input-container">
            <span className="material-icons">category</span>
            <select name="select">
              <option value="none">Categoria</option>
              <option value="jardinagem">Jardinagem</option>
              <option value="faxina">Faxina</option>
            </select>
          </div>

          <div className="input-container">
            <span className="material-icons">attach_money</span>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Preço médio"
            />
          </div>

          <div className="input-container">
            <span className="material-icons">description</span>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Descrição"
            />
          </div>

          <div className="buttons-container">
            <DangerButton id="cancel-button">Cancelar</DangerButton>
            <Button>Salvar</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
