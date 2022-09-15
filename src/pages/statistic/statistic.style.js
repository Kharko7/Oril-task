import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  const border = '1px solid rgba(229, 231, 235, 1)'

  return {
    container: {
      maxWidth: '1200px',
      width: '100%',
      margin: '20px auto',
      padding: '0 15px'
    },
    goBack: {
      width: '20px',
      height: '20px',
    },
    body: {
      border: border,
      borderRadius: '4px',
      minHeight: '570px',
      padding: '0 16px',
      fontFamily: 'Montserrat',
    },
    statsTotal: {
      margin: '22px 16px',
      '& p': {
        color: '#9C9C9C',
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
    statsRow: {
      display: 'flex',
      flexDirection: 'row',
    },
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
  }
});
