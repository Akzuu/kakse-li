import { Link, Container } from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';
import GithubIcon from '../img/GitHub-Mark-32px.png';
import LinkedInIcon from '../img/LI.png';
import InstagramIcon from '../img/IG.png';

const Contact = () => (
  <div>
    <Container maxWidth="xs">
      <p>
        <Link href="mailto:contact@kakse.li">
          <MailOutline style={{ position: 'relative', top: 7, paddingRight: 4 }} />
          contact@kakse.li
        </Link>
      </p>
      <p>
        <Link target="_blank" href="https://www.instagram.com/akzu404/" rel="noreferrer">
          <img height="26px" style={{ position: 'relative', top: 8, paddingRight: 2 }} src={InstagramIcon} alt="Instagram icon " />
          Instagram
        </Link>
      </p>
      <p>
        <Link target="_blank" href="https://www.linkedin.com/in/akseli-kolari/" rel="noreferrer">
          <img height="24px" style={{ position: 'relative', top: 5, paddingRight: 2 }} src={LinkedInIcon} alt="LinkedIn icon " />
          LinkedIn
        </Link>
      </p>
      <p>
        <Link target="_blank" href="https://www.github.com/Akzuu" rel="noreferrer">
          <img height="24px" style={{ position: 'relative', top: 5, paddingRight: 5 }} src={GithubIcon} alt="GitHub icon " />
          GitHub
        </Link>
      </p>
    </Container>
  </div>
);

export default Contact;
