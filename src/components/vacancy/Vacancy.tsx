import { Flex, Paper, Stack, Text } from "@mantine/core";
import { IconPointFilled } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import { IVacancies } from "../../interfaces/IVacancies";
import { getSalaryString, getJobTitle } from "../../utils";
import { useCallback } from "react";
import LocationSVG from "../../static/LocationSVG";
import StarSVG from "../../static/StarSVG";
import useStyles from "./useStyles";
import { useNavigate } from "react-router-dom";

interface IVacancyPage extends IVacancies {
  type: "detailed" | "common";
  checked: boolean;
}

const Vacancy = ({
  id,
  profession,
  workType,
  town,
  currency,
  firmName,
  paymentFrom,
  paymentTo,
  type,
  checked,
}: IVacancyPage) => {
  const isDetailed = type === "detailed" ? true : false;
  const { classes } = useStyles();
  const navigate = useNavigate();
  const isLarge = useMediaQuery("(min-width: 51em)");
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      navigate(`/vacancy/${id}`);
    },
    [id, navigate]
  );

  return (
    <Paper
      onClick={isDetailed ? () => {} : onClick}
      w={"100%"}
      withBorder
      radius={12}
      p={24}
    >
      <Stack spacing={isDetailed ? 16 : 12}>
        <Flex justify={"space-between"}>
          <Text
            truncate={isLarge ? true : undefined}
            className={isDetailed ? classes.detailedTitle : classes.title}
          >
            {getJobTitle(profession, firmName)}
          </Text>
          <StarSVG id={id} checked={checked} />
        </Flex>
        <Flex gap={12} align={"center"}>
          {paymentFrom !== 0 && (
            <Text
              className={isDetailed ? classes.detailedSalary : classes.salary}
            >
              {getSalaryString(paymentFrom, paymentTo, currency)}
            </Text>
          )}
          <IconPointFilled size={16} color="gray" />
          <Text
            className={isDetailed ? classes.detailedWorkType : classes.workType}
          >
            {workType}
          </Text>
        </Flex>
        <Flex gap={12} align={"center"}>
          <LocationSVG />
          <Text className={classes.town}>{town}</Text>
        </Flex>
      </Stack>
    </Paper>
  );
};

export default Vacancy;
