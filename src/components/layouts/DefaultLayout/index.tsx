import { useBackdrop } from "@/hooks/useBackdrop";
import { Backdrop, CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useIsFetching } from "react-query";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const DefaultLayout = ({ children }: Props) => {
  const isFetching = useIsFetching();
  const { backdropStatus } = useBackdrop();

  return (
    <S.MainContainer>
      <Backdrop sx={{ color: "#fff", zIndex: 999999 }} open={backdropStatus}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {!!isFetching && <S.QueryProgress />}
      {children}
    </S.MainContainer>
  );
};

export default DefaultLayout;
