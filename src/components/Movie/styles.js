import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  movie: {
    padding: "10px",
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: "ellipsis",
    width: '195px',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0
  },
  link:{
    alignItems: 'center',
    fontWeight: 'bolder',
    cursor: 'pointer',
    textDecoration:'none',
    [theme.breakpoints.up('xs')] : {
      display: 'flex',
      flexDirection: 'column',
    },
    "&:hover": {
      cursor: "pointer",
  },
  },
  image: {
      borderRadius: '20px',
      height: '280px',
      marginBottom: '10px',
      '&:hover': {
        transform: 'scale(1.05)'
      }
  }
}));
