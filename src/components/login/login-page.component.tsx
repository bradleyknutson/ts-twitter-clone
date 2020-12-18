import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import loginBackground from './loginBackground.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    height: '100vh',
    '& .MuiPaper-root': {
      backgroundColor: 'rgb(21, 32, 43)',
    },
  },
  image: {
    backgroundImage: `url(${loginBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    flexDirection: 'column',
  },
  form: {
    width: '100%',
    marginTop: '10px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  input: {
    '& .MuiInputLabel-root': {
      color: 'rgb(61, 84, 102)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(61, 84, 102)',
    },
    '& .MuiInputBase-input': {
      color: 'white',
    },
    margin: '10px',
  },
  inputLabel: {
    fontSize: '12px',
  },
  submit: {
    alignItems: 'center',
    margin: '10px 0 10px 0',
    borderRadius: '25px',
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Grid container component='main' classes={{ root: classes.root }}>
      <Grid item md={6} classes={{ root: classes.image }} />
      <Grid
        item
        md={6}
        component={Paper}
        elevation={6}
        square
        classes={{ root: classes.paper }}
      >
        <div>
          <form className={classes.form}>
            <TextField
              required
              id='login-username'
              label='Phone, email, or username'
              variant='outlined'
              classes={{ root: classes.input }}
              InputLabelProps={{ classes: { root: classes.inputLabel } }}
            />
            <TextField
              required
              id='login-password'
              label='Password'
              variant='outlined'
              classes={{ root: classes.input }}
              InputLabelProps={{ classes: { root: classes.inputLabel } }}
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              classes={{ root: classes.submit }}
            >
              Log in
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
