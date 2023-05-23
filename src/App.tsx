import { AppShell, Header, Container } from "@mantine/core";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import HeaderResponsiveProps from "./interfaces/IHeaderProps";
import HeaderContent from "./components/header/Header";
import useStyles from "./useStyles";

const store = setupStore();

const App = () => {
  const { classes } = useStyles();
  const links: HeaderResponsiveProps = {
    links: [
      {
        link: "/",
        label: "Поиск Вакансий",
      },
      {
        link: "/favourites",
        label: "Избранное",
      },
    ],
  };

  return (
    <Provider store={store}>
      <AppShell
        padding={0}
        header={
          <Header
            height={84}
            children={<HeaderContent links={links.links} />}
          />
        }
        bg={"#F5F5F5"}
      >
        <Container className={classes.root}>
          <Outlet />
        </Container>
      </AppShell>
    </Provider>
  );
};

export default App;
