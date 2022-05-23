import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Coctail } from '../../types/types';
import { coctailActions } from '../../redux/store/coctail-slice';

const color = pink[200];

const CoctailList = () => {
  const dispatch = useDispatch();

  const { coctails, param, details, isLoadingC, errorC } = useSelector(
    (state: any) => state.coctails
  );

  const showItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    const drink = coctails.find((item: Coctail) => item.idDrink === value);
    dispatch(coctailActions.setDetails(drink));
  };

  const hideItem = () => {
    dispatch(coctailActions.setDetails(null));
  };

  return (
    <Box
      sx={{
        width: '80%',
        maxHeight: '90vh',
        overflowY: 'scroll',
        bgcolor: color
      }}
    >
      <Typography
        variant='h4'
        component='h1'
        gutterBottom
        sx={{ padding: '15px' }}
      >
        {param}
      </Typography>
      {!details && (
        <List>
          {coctails.map((item: Coctail) => (
            <ListItemButton
              key={item.idDrink}
              onClick={(event) => showItem(event, item.idDrink)}
            >
              {item.strDrink}
            </ListItemButton>
          ))}
          {isLoadingC && <ListItem>Loading...</ListItem>}
          {errorC && <ListItem>{errorC}</ListItem>}
        </List>
      )}
      {details && (
        <Card>
          <CardHeader
            title={details.strDrink}
            subheader={details.strCategory}
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {details.strInstructions}
            </Typography>
          </CardContent>
          <IconButton onClick={hideItem} aria-label='share'>
            <ArrowBackIosNewIcon />
          </IconButton>
        </Card>
      )}
    </Box>
  );
};

export default CoctailList;
