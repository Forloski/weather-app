import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

type Props = {
  hour: number;
  icon: string;
  temp: string;
  desc: string;
};

const WeatherPanelLine = (props: Props) => {
  const { hour, icon, temp, desc } = props;

  return (
    <Box display="flex" justifyContent="space-between" mb={1}>
      <Typography
        variant="body2"
        display="inline"
        width={55}
      >{`${hour}:00`}</Typography>
      <Typography
        display="inline"
        variant="body2"
        width={55}
      >{`${temp} °C`}</Typography>
      <Box width={180} display="flex" alignContent="center">
        <Image src={`/images/${icon}.png`} alt="" width={25} height={25} />
        <Typography
          display="inline"
          variant="body2"
          width={140}
        >{`${desc}`}</Typography>
      </Box>
    </Box>
  );
};

export default WeatherPanelLine;
