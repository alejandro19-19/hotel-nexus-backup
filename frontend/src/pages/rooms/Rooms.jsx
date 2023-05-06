import { Settings } from "../../components/settings/Settings";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";
import "./rooms.scss";
import { useState } from "react";
import home_icon from "../../assets/home2.png";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [t, i18n] = useTranslation("rooms");
  const [name, setName] = useState("");
  const [occupied, setOccupied] = useState("");
  const navigate = useNavigate()

  function sendData() {
    fetch("http://localhost:8000/core/admin", {
      method: "POST",
      headers: {
        Authorization: `Token a11f3965fdb57e523aefaac2e79b3aad194f0470`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ disponible: occupied }),
    }).then((res) => {
      setName("");
      setOccupied("");
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendData();
  }

  return (
    <div className="Rooms">
      <div
        className="rooms_profile"
        onClick={() => {
          navigate("/home");
        }}
      >
        <img src={home_icon} alt="home" />
      </div>
      <div className="settings_rooms">
        <Settings />
      </div>
      <Header title={t("rooms")} subtitle={t("description")} />
      <div className="register_room">
        <h1>{t("register")}</h1>
        <form onSubmit={handleSubmit}>
          <div className="data">
            <p>{t("name")}:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>{t("occupied")}:</p>
            <input
              type="text"
              values={occupied}
              onChange={(e) => setOccupied(e.target.value)}
            />
            <button type="submit">{t("create")}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Rooms;
