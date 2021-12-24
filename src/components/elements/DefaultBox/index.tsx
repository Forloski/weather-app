import { Box } from "@mui/material";
import { ReactChild, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DefaultBox = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export default DefaultBox;
