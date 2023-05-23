import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    root: {
      width: "70%",
      [theme.fn.smallerThan(1440)]: {
        width: 773,
      },
      [theme.fn.smallerThan(805)]: {
        width: "100%",
      },
    },
  };
});

export default useStyles;
