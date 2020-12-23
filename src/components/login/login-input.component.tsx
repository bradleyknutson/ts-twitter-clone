import * as React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(() => ({
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  form: {
    display: 'inline-flex',
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
    marginRight: '10px',
  },
  inputLabel: {
    fontSize: '12px',
  },
  submitButton: {
    margin: '10px 0 10px 0',
    borderRadius: '25px',
  },
  loginPassword: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
}));

export default function LoginInput() {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <form className={classes.form}>
        <TextField
          required
          id='login-username'
          label='Phone, email, or username'
          variant='outlined'
          classes={{ root: classes.input }}
          InputLabelProps={{ classes: { root: classes.inputLabel } }}
        />
        <Grid
          item
          classes={{ root: clsx(classes.input, classes.loginPassword) }}
        >
          <TextField
            required
            id='login-password'
            label='Password'
            variant='outlined'
            classes={{
              root: classes.loginPassword,
            }}
            InputLabelProps={{ classes: { root: classes.inputLabel } }}
          />
          <Link href='#' classes={{ root: classes.loginPassword }}>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            classes={{ root: classes.submitButton }}
          >
            Log in
          </Button>
        </Grid>
      </form>
    </div>
  );
}
