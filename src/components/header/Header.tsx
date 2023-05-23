import useStyles from "./useStyles";
import { Container, Group, Burger, Paper, Transition } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import HeaderResponsiveProps from "../../interfaces/IHeaderProps";
import Logo from "../logo/Logo";
import { Link, useLocation } from "react-router-dom";

const HeaderContent = ({ links }: HeaderResponsiveProps) => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();
  const { pathname } = useLocation();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: pathname === link.link,
      })}
      onClick={() => {
        if (opened) toggle();
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Container className={classes.header}>
      <Logo />
      <Group spacing={36} className={classes.links}>
        {items}
      </Group>
      <Burger
        opened={opened}
        onClick={toggle}
        className={classes.burger}
        size="sm"
      />
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper className={classes.dropdown} withBorder style={styles}>
            {items}
          </Paper>
        )}
      </Transition>
    </Container>
  );
};

export default HeaderContent;
