import * as React from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import loginBackground from './loginBackground.png';
import LoginInput from './login-input.component';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';

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
  center: {
    height: '100%',
    display: 'flex',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiTypography-root': {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      color: 'white',
      pointerEvents: 'auto',
    },
    width: '50%',
    flexDirection: 'column',
    pointerEvents: 'none',
  },
  centeredItems: {
    width: '50%',
  },
  icon: {
    alignSelf: 'flex-start',
  },
  button: {
    borderRadius: '25px',
    width: '100%',
    marginBottom: '20px',
    pointerEvents: 'auto',
  },
  bottomCenteredText: {
    marginBottom: '50px',
  },
  text: {
    fontSize: '24px',
    fontWeight: 'bold',
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
        <LoginInput />
        <Grid item md={12} classes={{ root: classes.center }}>
          <Grid item classes={{ root: classes.centeredItems }}>
            <Icon component={TwitterIcon} classes={{ root: classes.icon }} />
            <Typography classes={{ root: classes.text }}>
              See what’s happening in the world right now
            </Typography>
            <Typography
              classes={{
                root: clsx(classes.text, classes.bottomCenteredText),
              }}
            >
              Join Twitter today.
            </Typography>
            <Button
              color='primary'
              variant='contained'
              classes={{ root: classes.button }}
            >
              Sign Up
            </Button>
            <Button
              color='secondary'
              variant='contained'
              classes={{ root: classes.button }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
