import './Content.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';

const Content = ({ tab = 'Home' }) => {
  if (tab === 'About') {
    return (
      <div className="content">
        <About />
      </div>
    );
  }
  if (tab === 'Resume') {
    return (
      <div className="content">
        <Resume />
      </div>
    );
  }

  return (
    <div className="content">
      <Home />
    </div>
  );
};

export default Content;
