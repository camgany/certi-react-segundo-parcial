import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "../../context/ContextProvider";
import { types } from "../../context/storeReducer";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    const { email, password } = data;

    // Obtener los datos del localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      const storedEmail = userData.email;
      const storedPassword = userData.password;

      // Verificar el correo y la contraseña
      if (email === storedEmail && password === storedPassword) {
        // Iniciar sesión y redirigir al usuario a la página principal
        dispatch({ type: types.login });
        navigate("/");
      } else {
        setErrorMessage("Correo o contraseña incorrectos");
      }
    } else {
      setErrorMessage("Datos de usuario no encontrados en el localStorage");
    }
  };

  return (
    <AuthLayout title="Ingresar a Gastos Personales">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              {...register("email", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              {...register("password", { required: true })}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>

          {errorMessage && (
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Typography color="error">{errorMessage}</Typography>
            </Grid>
          )}
        </Grid>
      </form>
    </AuthLayout>
  );
};
