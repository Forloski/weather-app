import { Typography } from "@mui/material";

type Props = {
  children: string | number;
};

const DefaultTypography = (props: Props) => {
  const { children } = props;

  return <Typography>{children}</Typography>;
};

export default DefaultTypography;
