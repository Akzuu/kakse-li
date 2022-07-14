import './Contact.css';
import {
  Link, Grid, Container, Box,
} from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';
import GithubIcon from '../img/GitHub-Mark-32px.png';
import LinkedInIcon from '../img/LI.png';

const Contact = () => (
  <div className="contact">
    <Container maxWidth="md">
      <Box bgcolor="rgba(255, 255, 255, 0.5)" p={10} boxShadow={3}>
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          spacing={1}
          style={{ marginTop: '10px' }}
        >

          <Grid item xs>
            <Link href="mailto:contact@kakse.li">
              <MailOutline style={{
                position: 'relative', top: 7, paddingRight: 4, fontSize: '26px',
              }}
              />
              contact@kakse.li
            </Link>
          </Grid>
          <Grid item xs>
            <Link target="_blank" href="https://www.linkedin.com/in/akseli-kolari/" rel="noreferrer">
              <img height="24px" style={{ position: 'relative', top: 5, paddingRight: 2 }} src={LinkedInIcon} alt="LinkedIn icon " />
              LinkedIn
            </Link>
          </Grid>
          <Grid item xs>
            <Link target="_blank" href="https://www.github.com/Akzuu" rel="noreferrer">
              <img height="24px" style={{ position: 'relative', top: 5, paddingRight: 5 }} src={GithubIcon} alt="GitHub icon " />
              GitHub
            </Link>
          </Grid>

        </Grid>

      </Box>
    </Container>
  </div>
);

export default Contact;
