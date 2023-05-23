import { Card } from "@mantine/core";
import parse from "html-react-parser";
import useStyles from "./useStyles";

type DetailedInfoType = {
  info: string;
};

const DetailedInfo = ({ info }: DetailedInfoType) => {
  const detailedInfo = info && parse(info);
  const { classes } = useStyles();
  return (
    <Card p={24} className={classes.detailedCard}>
      {detailedInfo}
    </Card>
  );
};

export default DetailedInfo;
