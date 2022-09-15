import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  statsBody: {
    height: '44px',
    margin: '0 16px',
    '& p': {
      color: '#9C9C9C',
      fontSize: '12px',
      lineHeight: '16px',
    },
    '& h3': {
      opacity: '0.8',
    },
  },
}));
