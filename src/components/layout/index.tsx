import { Box } from "@mui/material";
import { useIsFetching } from "react-query";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  const isFetching = useIsFetching();

  return (
    <Box>
      {!!isFetching && <S.QueryProgress />}
      {children}
    </Box>
  );
};

export default Layout;
