import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => { return {
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: 48,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan(870)]: {
      display: 'none',
    },
  },

  header: {
    width: '77.5%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    boxSizing: 'border-box',

    [theme.fn.smallerThan(870)]: {
      width: '100%',
      boxSizing: 'border-box',
    }
  },

  links: {
    [theme.fn.smallerThan(870)]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan(870)]: {
      visibility: 'hidden',
      width: 143,
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `8 12`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: 16,
    fontWeight: 400,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan(870)]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
      fontWeight: 500,
    },
  },
  }});

export default useStyles  