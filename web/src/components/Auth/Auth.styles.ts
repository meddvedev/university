import { styled } from "@mui/material/styles";
import { buttonClasses, textFieldClasses } from "@mui/material";
import Typography from "@mui/material/Typography";

import { Container } from "../Container";

export const AuthRoot = styled(Container)(() => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [`& .${textFieldClasses.root}`]: {
    marginBottom: "24px"
  },
  [`& .${buttonClasses.root}`]: {
    textTransform: "none"
  }
}));

export const AuthForm = styled("form")(({ theme }) => ({
  padding: "22px 24px 24px 24px",
  backgroundColor: theme.palette.surface[600],
  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.04)) drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.06))",
  borderRadius: "12px",
  maxWidth: "447px"
}));

export const AuthTitle = styled(Typography)(() => ({
  textAlign: "center",
  marginBottom: "24px"
})) as typeof Typography;
