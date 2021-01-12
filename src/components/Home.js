import {
  Grid, Box,
} from '@material-ui/core';

const Home = () => (
  <div>
    <Grid
      container
      spacing={5}
      style={{ marginTop: '10px' }}
    >
      <Grid item xs>
        <Box bgcolor="rgba(255, 255, 255, 0.5)" p={1} boxShadow={3}>
          <h1 style={{ textAlign: 'center' }}>Hello, Stranger</h1>
          <p>
            My name is Akseli Kolari and I&apos;m a fourth year software development
            student from Tampere, Finland. I&apos;m currently studying my degree at the
            Tampere University, previously known as the Tampere University of Technology.
          </p>
        </Box>
      </Grid>
    </Grid>
  </div>
);

export default Home;
