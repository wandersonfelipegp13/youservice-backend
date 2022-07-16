import { useNavigate } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";

import { useAuth } from "../hooks/useAuth";

import "../styles/service-list.scss";
import "../styles/service.scss";
import "../styles/category.scss";
import { useEffect, useState } from "react";

type Category = {
  name: string;
};

export function Category() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (!user) navigate('/')
  }, []);


  useEffect(() => {
    setCategories([
      {
        name: "Jardinagem",
      },
      {
        name: "Faxina",
      },
      {
        name: "Eletricista",
      },
    ]);
  }, []);

  function backHome() {
    navigate("/home");
  }

  return (
    <main id="page-new-service">
      <MenuBar></MenuBar>
      <div className="service-list-container">
        <div id="service-list-title">
          <span className="material-icons-round" onClick={backHome}>
            arrow_back
          </span>
          <h2 id="service-list-title-message">Categorias</h2>
        </div>
        <div id="service-list">
          <div className="service-info">
            <input type="text" name="c1" id="c1" placeholder="Nova Categoria" />
            <div className="category-buttons">
              <button className="btn-category-create">
                <span className="material-icons-round">add</span>
              </button>
            </div>
          </div>

          {categories.map((c) => {
            return (
              <div className="service-info" key={c.name}>
                <input type="text" name="c1" id="c1" placeholder={c.name} />
                <div className="category-buttons">
                  <button className="btn-category-confirm">
                    <span className="material-icons-round">done</span>
                  </button>
                  <button className="btn-category-delete">
                    <span className="material-icons-round">delete</span>
                  </button>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </main>
  );
}
