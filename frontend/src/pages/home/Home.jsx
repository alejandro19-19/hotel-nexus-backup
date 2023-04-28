import { useState } from "react";
import "./home.scss";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import CardMenu from "../../components/cardMenu/CardMenu";
import profile from "../../assets/profile.jpg";
import img2 from "../../assets/img3.png";
import bg from "../../assets/bg2.jpg";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";

const Home = () => {
  const [typeUser, setTypeUser] = useState("user");
  const [t, i18n] = useTranslation("home");
  const isNonMobile = useMediaQuery("(min-width:800px)");
  let links = null;

  const linksManager = [];
  const linksReceptionist = [];
  const linksUser = [
    {
      title: t("profile"),
      description: t("profile_description"),
      image: profile,
      number: 1,
      color: "red",
      path: "/profile",
    },
    {
      title: t("reservations"),
      description: t("reservations_description"),
      image: img2,
      number: 2,
      color: "purple",
      path: "/reservations",
    },
  ];

  if (typeUser === "user") {
    links = linksUser;
  }

  return (
    <div className="Home">
      <Menu />
      <div className="container__home">
        <div className="gradient"></div>
        <Header
          title={`${t("hi") + " Diego Fernando Ch"}`}
          subtitle={t("welcome")}
        />
        <div className="menu" style={{flexDirection: `${isNonMobile ? "row" : "column"}`}}>
          {links?.map((item) => {
            return (
              <CardMenu
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
                number={item.number}
                color={item.color}
                path={item.path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
