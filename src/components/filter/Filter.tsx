import {
  Paper,
  Stack,
  Flex,
  Text,
  Button,
  Select,
  NumberInput,
  Loader,
} from "@mantine/core";
import { IconX, IconChevronDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setFilters, fetchCatalogue } from "../../store";
import useStyles from "./useStyles";

const Filter = () => {
  const { values, isLoading } = useAppSelector(
    (state) => state.catalogueReducer
  );
  const { catalogues, payment_from, payment_to } = useAppSelector(
    (state) => state.filterReducer
  );
  const [filter, setFilter] = useState({
    catalogues,
    payment_from,
    payment_to,
  });
  const dispatch = useAppDispatch();
  const form = useForm({
    initialValues: {
      catalogues: filter.catalogues,
      salaryFrom: filter.payment_from,
      salaryTill: filter.payment_to,
    },
  });

  useEffect(() => {
    dispatch(fetchCatalogue());
  }, [dispatch]);

  const filterArray = values?.map(({ key, title }) => ({
    value: key.toString(),
    label: title,
  }));

  const { classes } = useStyles()

  return (
    <Paper mah={360} miw={320} shadow="xs" radius={12} p={20}>
      <Stack spacing={32}>
        <form
          onSubmit={form.onSubmit((values) => dispatch(setFilters(values)))}
        >
          <Flex justify="space-between" align="center">
            <Text fz={20} fw={700}>
              Фильтры
            </Text>
            <Button
              onClick={() => {
                setFilter({ catalogues: "", payment_from: "", payment_to: "" });
                form.reset();               
              }}
              fz={14}
              fw={500}
              p="0"
              color="gray"
              variant="subtle"
              rightIcon={<IconX size={14} />}
            >
              Сбросить всё
            </Button>
          </Flex>
          <Stack spacing={20}>
            {isLoading ? (
              <Loader />
            ) : (
              <Select
                data={filterArray}
                data-elem="industry-select"
                label="Отрасль"
                className={classes.select}
                labelProps={{ fw: 700, fz: 16, mb: 8 }}
                placeholder="Выберете отрасль"
                searchable
                nothingFound="Nothing found"
                rightSection={<IconChevronDown size="1rem" />}
                styles={{ rightSection: { pointerEvents: "none" } }}
                {...form.getInputProps("catalogues")}
              />
            )}
            <Stack spacing={8}>
              <NumberInput
                min={0}
                data-elem="salary-from-input"
                placeholder="От"
                label="Оклад"
                labelProps={{ fw: 700, fz: 16, mb: 8 }}
                {...form.getInputProps("salaryFrom")}
              />
              <NumberInput
                min={Number(form.values.salaryFrom)}
                placeholder="До"
                data-elem="salary-to-input"
                {...form.getInputProps("salaryTill")}
              />
            </Stack>
            <Button
              data-elem={"search-button"}
              type="submit"
              radius={8}
              bg="#5E96FC"
              fw={500}
              fz={14}
            >
              Применить
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};

export default Filter;
