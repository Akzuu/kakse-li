import {
  Tab, Tabs, AppBar,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import topBanner from '../img/banner1.jpg';

const Header = ({ tab, handleTabChange }) => (
  <div>
    <img
      src={topBanner}
      alt=""
      style={{
        maxHeight: 400, width: '100%', objectFit: 'cover',
      }}
    />
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', marginTop: '-3px' }}>
      <Tabs centered value={tab}>
        <Tab label="Home" value="Home" onClick={() => { handleTabChange('Home'); }} />
        <Tab label="About" value="About" onClick={() => { handleTabChange('About'); }} />
        <Tab label="Resume" value="Resume" onClick={() => { handleTabChange('Resume'); }} />
        <Tab label="GitHub (link)" value="Github" onClick={() => { window.open('http://github.com/Akzuu'); }} />
      </Tabs>
    </AppBar>
  </div>
);
Header.propTypes = {
  tab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default Header;
