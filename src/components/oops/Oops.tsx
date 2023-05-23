import { Button, Image, Stack, Text } from "@mantine/core";
import img from "../../static/NotFound.png";
import { useNavigate } from "react-router-dom";
import useStyles from "./useStyles";

const Oops = () => {
  const navigate = useNavigate();
  const { classes } = useStyles()
  return (
    <Stack spacing={32} align="center" mt={120}>
      <Image src={img} width={360} height={360} fit="contain" />
      <Text>Упс, здесь ещё ничего нет!</Text>
      <Button
        className={classes.button}
        onClick={() => {
          navigate(`/jobApp/`);
        }}
      >
        Поиск Вакансий
      </Button>
    </Stack>
  );
};

export default Oops;
