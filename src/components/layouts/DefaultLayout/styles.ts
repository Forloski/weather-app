import { CircularProgress, Container, styled } from "@mui/material";

export const QueryProgress = styled(CircularProgress)(() => ({
  position: "fixed",
  top: 20,
  right: 20,
}));

export const MainContainer = styled(Container)(() => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
}));
