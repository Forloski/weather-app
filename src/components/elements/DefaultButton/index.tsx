import { Button } from "@mui/material";

type Props = {
  type: "button" | "submit" | "reset";
  children: string;
};

const DefaultButton = (props: Props) => {
  const { type, children } = props;

  return (
    <Button variant="contained" type={type}>
      {children}
    </Button>
  );
};

export default DefaultButton;
