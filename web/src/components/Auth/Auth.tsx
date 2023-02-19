import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { AuthForm, AuthRoot, AuthTitle } from "./Auth.styles";

export const Auth = () => {
  return (
    <AuthRoot>
      <AuthForm noValidate>
        <AuthTitle variant="h5">DNTU IS</AuthTitle>
        <TextField fullWidth label="Email" type="email" />
        <TextField fullWidth label="Пароль" type="password" />
        <Button size="48" variant="contained" fullWidth type="submit">
          Войти
        </Button>
      </AuthForm>
    </AuthRoot>
  );
};
