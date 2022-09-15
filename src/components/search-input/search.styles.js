import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => {
  const border = '1px solid rgba(229, 231, 235, 1)'

  return {
    inputBody: {
      position: 'relative',
      '& img': {
        position: 'absolute',
        top: '12px',
        left: '18px',
        cursor: 'text',
      }
    },
    input: {
      backgroundColor: '#F9FAFB',
      borderRadius: '8px',
      color: '#6B7280',
      width: '320px',
      height: '40px',
      border: border,
      paddingLeft: '44px',
      outline: 0
    }
  };
});
