import { useState } from "react";
import "./menu.scss";
import logout from "../../assets/logout.png"

const Menu = () => {
  const [typeUser, setTypeUser] = useState("user");
  let links = null;

  const linksManager = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
  ];
  const linksReceptionist = [
    { title: "login", path: "/login" },
    { title: "register", path: "/register" },
  ];
  const linksUser = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },
  ];

  if (typeUser === "user") {
    links = linksUser;
  }

  return (
    <div className="Menu">
      <div className="container__menu">
        <div className="links">
          {links?.map((item) => {
            return <button key={item.title}>{item.title}</button>;
          })}
        </div>
        <div className="user">
          <div className="role">{typeUser.toUpperCase()}</div>
          <img src={logout} alt="Log out" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
