import { useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';
import { Paper } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import CoctailList from './components/coctails/CoctailList';
import Navbar from './components/ui/Navbar/Navbar';
import bcImg from './assets/background.jpg';

function App() {
  const color = blueGrey[700];
  const styles = {
    paperContainer: {
      backgroundImage: `url(${bcImg})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
    }
  };

  const { param } = useSelector((state: any) => state.coctails);
  return (
    <Paper style={styles.paperContainer}>
      <Container maxWidth={false}>
        <Grid item xs={2}>
          <Navbar />
        </Grid>
        <Grid item xs={8} sx={{ marginLeft: '500px', paddingTop: '50px' }}>
          {param && <CoctailList />}
        </Grid>
      </Container>
    </Paper>
  );
}

export default App;
