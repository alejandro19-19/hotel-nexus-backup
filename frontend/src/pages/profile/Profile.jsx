import "./profile.scss";
import { Settings } from "../../components/settings/Settings";
import Header from "../../components/header/Header";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import home_icon from "../../assets/home2.png";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [data, setData] = useState({
    nombre: "Diego",
    apellido: "Chaverra",
    email: "diego@diego.com",
    direccion: "por ahí",
    fecha_nacimiento: "2023-02-02",
  });
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  function submit(e) {
    console.log(enviado);
  }
  return (
    <div className="Profile">
      <div
        className="home_profile"
        onClick={() => {
          navigate("/home");
        }}
      >
        <img src={home_icon} alt="home" />
      </div>
      <div className="settings_profile">
        <Settings />
      </div>
      <Header title={"Profile"} subtitle={"Manage yuor information"} />
      <div className="formulario">
        <p>Datos personales</p>
        <Formik onSubmit={submit} initialValues={data}>
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Nombre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nombre}
                  name="nombre"
                  disabled
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Apellido"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.apellido}
                  name="apellido"
                  disabled
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  disabled
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Dirección de residencia"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.direccion}
                  name="direccion"
                  disabled
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Fecha de nacimiento"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fecha_nacimiento}
                  name="fecha_nacimiento"
                  disabled
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
