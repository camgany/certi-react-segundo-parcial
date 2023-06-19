import { Grid, TextField, Button } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const RegisterPage = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const password = getValues("password");

  const onSubmit = (data) => {
    // Guardar los datos en el localStorage
    localStorage.setItem("userData", JSON.stringify(data));
    console.log("Datos guardados:", data);

    setIsRegistered(true); // Marcar como registrado
  };

  if (isRegistered) {
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = "/auth/login";
    return null;
  }

  return (
    <AuthLayout title="Registrarse a Gastos Personales">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@gmail.com"
              fullWidth
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span>Ingrese un correo electrónico válido</span>}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Contraseña"
              fullWidth
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <span>
                Ingrese una contraseña válida de al menos 6 caracteres
              </span>
            )}
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="passwordVerified"
              type="password"
              placeholder="Verificar Password"
              fullWidth
              {...register("passwordVerified", {
                required: true,
                validate: (value) =>
                  value === password || "Las contraseñas no coinciden",
              })}
            />
            {errors.passwordVerified && (
              <span>{errors.passwordVerified.message}</span>
            )}
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
