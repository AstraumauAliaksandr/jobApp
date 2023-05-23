import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => { return {
    detailedCard: {
        borderRadius: 12,
        border: `1px solid #EAEBED`,
        "& > b": {
            fontSize: 20,
            lineHeight:1,
            fontWeight: 700
          },
        "& > p": {
            fontSize: 16,
            lineHeight:1.2,
            fontWeight: 400
          },
    }
}})

export default useStyles  