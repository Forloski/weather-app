import { Box, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

export const ButtonBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 24,
  flexWrap: "wrap",
}));

export const FormContainer = styled(Container)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
}));

export const SubmitButton = styled(Button)(() => ({
  minWidth: "145px",
  maxWidth: "170px",
  margin: 5,
}));
