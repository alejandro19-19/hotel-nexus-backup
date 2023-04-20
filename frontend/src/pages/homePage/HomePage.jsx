import "./homePage.scss";
import { useTranslation } from "react-i18next";
import { Context } from "../../context/Context";
import { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Grid from "@mui/material/Grid";
import CardInformation from "../../components/cardInformation/CardInformation";
import imgMision from "../../assets/mision.png";
import imgVision from "../../assets/vision.png";
import ImageSlider from "../../components/imageSlider/ImageSlider";

const information = [
  {
    title: "MISION",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam ipsum magni, pariatur et accusantium quo est mollitia temporibus voluptatibus suscipit cupiditate vel quidem molestias tempora quaerat, deserunt esse deleniti.",
  },
  {
    title: "VISION",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam ipsum magni, pariatur et accusantium quo est mollitia temporibus voluptatibus suscipit cupiditate vel quidem molestias tempora quaerat, deserunt esse deleniti.",
  },
];

const HomePage = () => {
  const [t, i18n] = useTranslation("homePage");
  const context = useContext(Context);
  const [mision, setMision] = useState({
    title: "MISION",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam ipsum magni, pariatur et accusantium quo est mollitia temporibus voluptatibus suscipit cupiditate vel quidem molestias tempora quaerat, deserunt esse deleniti.",
  });
  const [vision, setVision] = useState({
    title: "VISION",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsam ipsum magni, pariatur et accusantium quo est mollitia temporibus voluptatibus suscipit cupiditate vel quidem molestias tempora quaerat, deserunt esse deleniti.",
  });

  return (
    <div className="HomePage">
      <Navbar />
      <Grid container>
        <CardInformation
          title={mision.title}
          text={mision.text}
          img={imgMision}
        />
        <CardInformation
          title={vision.title}
          text={vision.text}
          img={imgVision}
        />
        <ImageSlider />
      </Grid>
      <footer>
        <div className="bg"></div>
        <div className="footer_content">
          <h3>Hotel Nexus</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem
            ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className="socials">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
