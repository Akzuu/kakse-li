import { Link, Grid, Container } from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';
import GithubIcon from '../img/GitHub-Mark-Light-64px.png';
import LinkedInIcon from '../img/LI-Light.png';
import InstagramIcon from '../img/IG-Light.png';

const Footer = () => (
  <div>
    <Container maxWidth="sm">
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={0}
        style={{ marginTop: '0px', marginBottom: '-10px' }}
      >
        <Grid item xs>
          <Link
            color="inherit"
            target="_blank"
            href="mailto:contact@kakse.li"
            rel="noreferrer"
          >
            <MailOutline style={{
              position: 'relative', top: '-2px', paddingRight: 4, fontSize: '29px',
            }}
            />
          </Link>
        </Grid>
        <Grid item xs>
          <Link target="_blank" href="https://www.instagram.com/akzu404/" rel="noreferrer">
            <img height="24px" src={InstagramIcon} alt="Instagram icon " />
          </Link>
        </Grid>
        <Grid item xs>
          <Link target="_blank" href="https://www.linkedin.com/in/akseli-kolari/" rel="noreferrer">
            <img height="24px" src={LinkedInIcon} alt="LinkedIn icon " />
          </Link>
        </Grid>
        <Grid item xs>
          <Link target="_blank" href="https://www.github.com/Akzuu" rel="noreferrer">
            <img height="24px" src={GithubIcon} alt="GitHub icon " />
          </Link>
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Footer;
