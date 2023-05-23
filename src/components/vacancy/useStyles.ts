import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => {
  return {
    title: {
      lineHeight: 1.2,
      color: "#5E96FC",
      fontWeight: 600,
      fontSize: 20,
    },
    detailedTitle: {
      lineHeight: 1.2,
      color: "#232134",
      fontWeight: 700,
      fontSize: 28,
    },
    salary: {
      padding: 0,
      lineHeight: 1.2,
      fontWeight: 600,
      fontSize: 16,
    },
    detailedSalary: {
      padding: 0,
      lineHeight: 1,
      fontWeight: 700,
      fontSize: 20,
    },
    workType: {
      lineHeight: 1.2,
      fontWeight: 400,
      fontSize: 16,
    },
    detailedWorkType: {
      lineHeight: 1,
      fontWeight: 400,
      fontSize: 20,
    },
    town: {
      lineHeight: 1.2,
      fontWeight: 400,
      fontSize: 16,
    },
  };
});

export default useStyles;
