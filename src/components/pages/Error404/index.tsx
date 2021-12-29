import { useBackdrop } from "@/hooks/useBackdrop";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { useEffect } from "react";
import * as S from "./styles";

const Error404Page = () => {
  const { setBackdropStatus } = useBackdrop();

  useEffect(() => {
    setBackdropStatus(false);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography align="center">Erro 404 - Não Encontrado</Typography>
      <Typography align="center" variant="h4" mt={2} mb={4}>
        Não foi possivel encontrar sua cidade
      </Typography>

      <Link href="/" passHref>
        <S.HomeButton variant="contained">Voltar a pagina inicial</S.HomeButton>
      </Link>
    </Box>
  );
};

export default Error404Page;
