import { useIsFetching } from "react-query";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

const DefaultLayout = ({ children }: Props) => {
  const isFetching = useIsFetching();

  return (
    <S.MainContainer>
      {!!isFetching && <S.QueryProgress />}
      {children}
    </S.MainContainer>
  );
};

export default DefaultLayout;
