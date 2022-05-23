import Drawer from '@mui/material/Drawer';
import { Typography } from '@mui/material';
import IngredientList from '../../ingredients/IngredientList';
import { navbarStyles } from './styles';

const Navbar = () => {
  return (
    <Drawer sx={navbarStyles.drawer} variant='permanent' anchor='left'>
      <Typography
        variant='h4'
        component='h3'
        sx={{ padding: '10px', textTransform: 'uppercase' }}
      >
        Ingredients
      </Typography>
      <div style={{ padding: '10px', textTransform: 'uppercase' }}>
        Click on ingredient to display list of cocktails
      </div>
      <IngredientList />
    </Drawer>
  );
};

export default Navbar;
