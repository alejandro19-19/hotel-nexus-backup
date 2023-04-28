import "./buttonIcon.scss";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

export const ButtonIcon = ({ text, icon, link }) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();

  return (
    <div
      className="ButtonIcon"
      onClick={() => {
        link == "language"
          ? i18n.language === "es"
            ? i18n.changeLanguage("en")
            : i18n.changeLanguage("es")
          : navigate(link);
      }}
    >
      <p>{text}</p>
      <img src={icon} alt="icon" />
    </div>
  );
};
