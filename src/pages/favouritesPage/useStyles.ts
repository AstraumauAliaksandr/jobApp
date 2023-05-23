import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    root: {
      alignItems: "center",
      justifyContent: "space-between",
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
