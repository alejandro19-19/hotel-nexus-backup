import { useState } from "react";
import logo from "../../assets/Logo_Vertical_Azul.png";
import "./login.scss";
import icon from "../../assets/flecha.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="Login grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      <div
        className="inicio"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={icon} alt="regresar" />
        <p>Inicio</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-blue-950 rounded-tl-lg rounded-bl-lg p-4">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold text-gray-50">Bienvenido</h1>
        </div>
        <div className="my-14">
          <p className="text-center relative text-gray-50 before:max-w-[50px] md:before:max-w-[120px] before:w-full before:-left-[60px] md:before:-left-[140px] before:h-[1px] before:bg-current before:absolute before:top-[50%] after:max-w-[50px] md:after:max-w-[120px] after:w-full after:h-[1px] after:bg-current after:absolute after:top-[50%] after:-right-[60px] md:after:-right-[140px]">
            Ingresa con tu email
          </p>
        </div>
        <div className="w-full mb-8">
          <form>
            <div className="flex justify-center mb-4">
              <input
                type="email"
                className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="flex justify-center mb-6">
              <input
                type="password"
                className="w-full max-w-md py-2 px-4 rounded-lg outline-none"
                placeholder="Password"
              />
            </div>
            <div className="w-full max-w-md mx-auto flex items-center justify-between text-gray-500 mb-8"></div>
            <div className="w-full max-w-md mx-auto">
              <button
                type="submit"
                className="w-full bg-gray-200 py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-300 transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <div>
          <span className="text-gray-50">
            ¿No tienes cuenta?{" "}
            <a
              href="/register"
              className="text-gray-500 hover:underline transition-all"
            >
              Registrate
            </a>
          </span>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center border-t border-r border-b rounded-tr-lg rounded-br-lg">
        <img src={logo} />
      </div>
    </div>
  );
};

export default Login;
