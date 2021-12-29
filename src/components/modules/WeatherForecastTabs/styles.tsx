import { Box, styled } from "@mui/material";

export const TabsBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    alignItems: "center",
  },
}));
