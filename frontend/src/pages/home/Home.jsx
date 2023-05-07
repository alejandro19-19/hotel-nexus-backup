import { useEffect, useState } from "react";
import "./home.scss";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import CardMenu from "../../components/cardMenu/CardMenu";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@mui/material/useMediaQuery";
import { generateLinks } from "./links";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const [t, i18n] = useTranslation("home");
  const isNonMobile = useMediaQuery("(min-width:800px)");
  let links = generateLinks("receptionist", t);
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000)
  // }, [])

  return (
    <div className="Home">
      {/* {loading && <Loader />} */}
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
