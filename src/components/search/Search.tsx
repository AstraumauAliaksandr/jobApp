import { useState } from "react";
import { TextInput, Button, rem } from "@mantine/core";
import SearchSVG from "../../static/SearchSVG";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setQuery } from "../../store";

const SearchField = () => {
  const { keyword } = useAppSelector((state) => state.filterReducer);
  const [input, setInput] = useState<string>(keyword);
  const dispatch = useAppDispatch();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const onClick = () => {
    dispatch(setQuery(input));
  };

  return (
    <TextInput
      miw={320}
      size={"lg"}
      radius={8}
      value={input}
      data-elem={"search-input"}
      onChange={onChange}
      placeholder="Введите название вакансии"
      icon={<SearchSVG />}
      rightSectionWidth={106}
      rightSection={
        <Button
          onClick={onClick}
          p={`${rem(8)} ${rem(12)}`}
          h={32}
          radius={8}
          fz={14}
          fw={500}
          data-elem={"search-button"}
        >
          Поиск
        </Button>
      }
    />
  );
};

export default SearchField;
