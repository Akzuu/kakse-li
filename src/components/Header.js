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
        maxHeight: 150, width: '100%', objectFit: 'cover',
      }}
    />
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'black', marginTop: '-3px' }}>
      <Tabs centered value={tab}>
        <Tab label="Home" value="Home" onClick={() => { handleTabChange('Home'); }} />
        <Tab label="Resume" value="Resume" onClick={() => { handleTabChange('Resume'); }} />
        <Tab label="Contact" value="Contact" onClick={() => { handleTabChange('Contact'); }} />
        <Tab label="Hobbies" value="Hobbies" onClick={() => { handleTabChange('Hobbies'); }} />
      </Tabs>
    </AppBar>
  </div>
);
Header.propTypes = {
  tab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};

export default Header;
