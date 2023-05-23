import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    root: {
      boxSizing: "border-box",
      [theme.fn.largerThan(352)]: {
        padding: 16,
      },
      [theme.fn.largerThan(669)]: {
        width: "100%",
        padding: 0,
      },
      [theme.fn.smallerThan(750)]: {
        flexDirection: "column",
        gap: 14,
      },
    },
    containerStack: {
      [theme.fn.largerThan(805)]: {
        width: `calc(100% - 348px)`,
      },
    },
  };
});

export default useStyles;
