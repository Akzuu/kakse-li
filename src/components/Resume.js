import './Resume.css';
import {
  Grid, Box,
} from '@material-ui/core';

const Resume = () => (
  <div>
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={2}
      style={{ marginTop: '10px' }}
    >
      <Grid item xs>
        <Box bgcolor="rgba(125, 249, 255, 0.3)" p={1} boxShadow={3}>
          <h2>Education</h2>
          <Box bgcolor="rgba(255, 255, 255, 0.5)" p={1} boxShadow={3}>
            <h4>Master of Science (Technology)</h4>
            <h6>Program: Software Engineering</h6>
            <h6>Tampere University | 2017 - </h6>
            <p>
              I graduated as a bachelor of science during the fall of 2020.
              My bachelor&apos;s thesis focused on serverless architecture.
            </p>
          </Box>
          <Box bgcolor="rgba(255, 255, 255, 0.5)" p={1} boxShadow={3}>
            <h4>High School Graduate</h4>
            <h6>Viitasaaren Lukio | 2013-2016 </h6>
          </Box>
        </Box>
      </Grid>
      <Grid item xs>
        <Box bgcolor="rgba(50,205,50, 0.3)" p={1} boxShadow={3}>
          <h2>Employment History</h2>
          <Box bgcolor="rgba(255, 255, 255, 0.5)" p={1} boxShadow={3}>
            <h4>Software Developer Trainee</h4>
            <h6>Plugit Finland Oy | May 2019 - Aug 2019</h6>
            <p>
              During my time at Plugit, I was part of small backend development team.
              We used Node.js to create microservices,
              which were ran with Kubernetes in Google Cloud.
            </p>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </div>
);

export default Resume;
