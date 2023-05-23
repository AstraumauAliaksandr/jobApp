import { Stack } from "@mantine/core";
import Vacancy from "../vacancy/Vacancy";
import Oops from "../oops/Oops";
import { IVacancies } from "../../interfaces/IVacancies";
import { isChecked } from "../../utils";

export type ListData = {
  data: IVacancies[];
};

const VacancyList = ({ data }: ListData) => {
  return (
    <Stack w={"100%"} align="center" h={"100%"}>
      {data.length === 0 ? (
        <Oops />
      ) : (
        data.map((item) => (
          <Vacancy
            data-elem={`vacancy-${item.id}`}
            type="common"
            checked={isChecked(item.id)}
            key={item.id}
            {...item}
          />
        ))
      )}
    </Stack>
  );
};

export default VacancyList;
