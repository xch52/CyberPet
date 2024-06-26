import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
      ul: {
          margin: 0,
          padding: 0,
          listStyle: 'none',
      },
  },
  footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
          paddingTop: theme.spacing(6),
          paddingBottom: theme.spacing(6),
      },
  },
}));


const footers = [
  {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
  },
];

function Footer(props) {

  const classes = useStyles();

  return (
    <Container maxWidth="md" component="footer" className={classes.footer}>
    <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                </Typography>
                <ul>
                    {footer.description.map((item) => (
                        <li key={item}>
                            <Link href="#" variant="subtitle1" color="textSecondary">
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Grid>
        ))}
    </Grid>
    <Box mt={5}>
        <Copyright />
    </Box>
</Container>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;