import { makeStyles } from "@material-ui/core";
import { createStyles } from "@material-ui/core/styles";
import { COLOR_INDIGO_600 } from "../../theme/colors";

export const useStyles = makeStyles(() => {
  return createStyles({
    swap: {
      width: "460px",
      minHeight: "320px",
      padding: "16px 16px 24px",
      background: "rgb(25, 27, 31)",
      borderRadius: "20px",
    },
    head: {
      padding: "8px 12px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    inputWrapper: {
      display: "flex",
      flexDirection: "column",
      rowGap: "12px",
      marginBottom: "24px",
    },
    switchBtn: {
      margin: "0 30px 0 auto",
      border: `1px solid ${COLOR_INDIGO_600}`,
      "& > .MuiIconButton-label": {
        transform: "rotate(90deg)",
      },
    },
    btnChange: {
      width: "100%",
    },
  });
});