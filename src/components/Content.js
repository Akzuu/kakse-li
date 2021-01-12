import './Content.css';
import { Container } from '@material-ui/core';
import Home from './Home';
import Contact from './Contact';
import Resume from './Resume';

const contentGenerator = (content) => (
  <div className="content">
    <Container maxWidth="lg">
      { content }
    </Container>
  </div>
);

const Content = ({ tab = 'Home' }) => {
  if (tab === 'Contact') {
    return contentGenerator(<Contact />);
  }
  if (tab === 'Resume') {
    return contentGenerator(<Resume />);
  }

  return contentGenerator(<Home />);
};

export default Content;
