import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  const border = '1px solid rgba(229, 231, 235, 1)'

  return {
    container: {
      maxWidth: '1200px',
      width: `100%`,
      margin: '20px auto',
      padding: '0 15px'
    },
    bodyFiltering: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      '@media (max-width: 660px)': {
        flexWrap: 'wrap',
      },
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#6B7280',
      '& tbody a': {
        display: 'contents',
      },
      '& th': {
        textAlign: 'start',
        padding: '12px 24px',
        backgroundColor: '#F9FAFB',
      },
      '& td': {
        padding: '16px 24px',
        fontSize: '14px',
        lineHeight: '20px',
      },
      '& tr': {
        border: border,
      },
    },
    rowCoin: {
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#F6F6F6',
      }
    },
  }
});
