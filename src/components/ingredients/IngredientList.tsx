import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, List, ListItemButton } from '@mui/material';
import { pink } from '@mui/material/colors';
import { ingredientActions } from '../../redux/store/ingredient-slice';
import { coctailActions } from '../../redux/store/coctail-slice';
import { Ingredient } from '../../types/types';

const color = pink[500];

const IngredientList = () => {
  const dispatch = useDispatch();

  const { ingredients, isLoading, error } = useSelector(
    (state: any) => state.ingredients
  );

  const showCoctails = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    dispatch(coctailActions.getCoctailsFetch(value));
  };

  useEffect(() => {
    dispatch(ingredientActions.getIngredientsFetch());
  }, [dispatch]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        maxHeight: '80%',
        overflowY: 'scroll',
        bgcolor: color
      }}
    >
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <List>
        {ingredients.map((item: Ingredient) => {
          return (
            <ListItemButton
              sx={{
                textTransform: 'uppercase'
              }}
              key={item.strIngredient1}
              onClick={(event) => showCoctails(event, item.strIngredient1)}
            >
              {item.strIngredient1}
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default IngredientList;
