import { useAuth } from "../hooks/useAuth";

import { useNavigate } from "react-router-dom";

import "../styles/new-service.scss";
import "../styles/input-container.scss";
import { Button } from "../components/Button";
import { DangerButton } from "../components/DangerButton";
import { MenuBar } from "../components/MenuBar";
import { FormEvent, useState } from "react";
import { database } from "../services/firebase.";

export function NewService() {

  const navigate = useNavigate();

  const { user } = useAuth();

  const [newServiceCategory, setNewServiceCategory] = useState("");
  const [newServicePrice, setNewServicePrice] = useState("");
  const [newServiceDescription, setNewServiceDescription] = useState("");

  async function handleCreateService(event: FormEvent) {
    event.preventDefault();

    if (
      newServiceCategory.trim() === "" ||
      newServicePrice.trim() === "" ||
      newServiceDescription.trim() === ""
    )
      return;

    const serviceRef = database.ref('services')
    const firebaseService = await serviceRef.push({
      category: newServiceCategory,
      price: newServicePrice,
      description: newServiceDescription,
      authorId: user?.id
    })

    navigate(`/service/${firebaseService.key}`)
  }

  return (
    <main id="page-new-service">
      <MenuBar></MenuBar>
      <div className="page-container">
        <h2>Criar um novo serviço</h2>
        <form onSubmit={handleCreateService}>
          <div className="input-container">
            <span className="material-icons">category</span>
            <select
              name="select"
              onChange={(event) => setNewServiceCategory(event.target.value)}
              value={newServiceCategory}
            >
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
              onChange={(event) => setNewServicePrice(event.target.value)}
              value={newServicePrice}
            />
          </div>

          <div className="input-container">
            <span className="material-icons">description</span>
            <input
              type="text"
              name="price"
              id="price"
              placeholder="Descrição"
              onChange={(event) => setNewServiceDescription(event.target.value)}
              value={newServiceDescription}
            />
          </div>

          <div className="buttons-container">
            <DangerButton id="cancel-button">Cancelar</DangerButton>
            <Button type="submit">Salvar</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
