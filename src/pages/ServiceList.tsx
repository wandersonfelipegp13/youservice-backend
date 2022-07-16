import { useNavigate } from "react-router-dom";
import { MenuBar } from "../components/MenuBar";
import { useEffect, useState } from "react";
import { database } from "../services/firebase.";
import { useAuth } from "../hooks/useAuth";

import "../styles/service-list.scss";

type Service = {
  category: string;
  price: string;
  description: string;
  authorId: string;
  authorName: string;
  authorEmail: string;
  authorAvatar: string;
  uf: string;
  city: string;
};

export function ServiceList() {
  const { user } = useAuth();

  const navigate = useNavigate();
  const [serviceList, setServiceList] = useState<Service[]>([]);

  useEffect(() => {
    if (!user) navigate('/')
  }, []);

  var userId: string = "";
  if (user != null) userId = user.id;

  useEffect(() => {
    const serviceRef = database
      .ref(`services/`)
      .orderByChild("authorId")
      .equalTo(userId);
    serviceRef.on("value", (service) => {
      const services = service.val();
      const serviceList = [];
      for (let id in services) {
        serviceList.push(services[id]);
      }
      setServiceList(serviceList);
    });
  }, []);

  function backHome() {
    navigate("/home");
  }

  function editService() {
    navigate("/services/new");
  }

  function createNewService() {
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
          {serviceList.map((service) => (
            <div className="service-info" onClick={editService}>
              <div className="service-resume">
                <span className="service-category">
                  {service.category}
                </span>
                <span className="service-description">
                  {service.description}
                </span>
              </div>
              <span className="service-list-price">
                R$ {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="fab-add" onClick={createNewService}>
        <span className="material-icons-round">add</span>
      </div>
    </main>
  );
}
