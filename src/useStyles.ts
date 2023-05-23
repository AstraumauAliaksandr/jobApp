import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => { return {
    root: {
      justifyContent: "center",
      width: "77.5%",
      maxWidth: "100%",
      display: "flex",
      height: "100%",
      boxSizing: "border-box",
      padding: 16,
      paddingTop: 40,
      paddingBottom: 44,
      [theme.fn.smallerThan(965)]: {
        width: "100%",
      },
      [theme.fn.smallerThan(750)]: {
        width: "100%",
        paddingTop: 0,
      },
    },
  }});

  export default useStyles
  