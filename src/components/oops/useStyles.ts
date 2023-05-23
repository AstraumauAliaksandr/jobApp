import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => { return {
  button: {
    backgroundColor: '#DEECFF',
    color: '#3B7CD3',
    width: 164, 
    height: 42,
    borderRadius: 8,
    paddig: `10 24`,
    '&:hover': {
      color: '#FFFFFF' ,
    },
  }
  }});

export default useStyles  