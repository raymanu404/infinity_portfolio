import { theme } from '@/theme';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Minus, Plus } from 'lucide-react';
import React, { startTransition } from 'react';

interface CartItemContainerProps {
  title: string;
  quantity: number;
  readonly price: number;
  description?: string;
  actionHandler: (quantity: number) => Promise<void>;
}

const CartItemContainer: React.FC<CartItemContainerProps> = ({
  actionHandler,
  title,
  price,
  quantity = 0,
  description,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: theme.custom.specialPalette?.variant[400],
        borderRadius: '20px',
        boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
        width: '150px',
        height: '150px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
            <Typography gutterBottom variant="subtitle2" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {price}
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => {
              if (quantity > 0) {
                startTransition(async () => {
                  await actionHandler(quantity - 1);
                });
              }
            }}
          >
            <Minus />
          </IconButton>
          <TextField
            type="number"
            variant="standard"
            //   sx={{
            //     '::-webkit-outer-spin-button': {
            //       appearance: 'none',
            //       margin: 0,
            //     },
            //     '::-webkit-inner-spin-button': {
            //       appearance: 'none',
            //       margin: 0,
            //     },
            //   }}
            value={quantity}
            onChange={({ target }) => {
              startTransition(async () => {
                await actionHandler(+target.value);
              });
            }}
          />
          <IconButton
            onClick={() => {
              if (quantity < 20) {
                startTransition(async () => {
                  await actionHandler(quantity + 1);
                });
              }
            }}
          >
            <Plus />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

CartItemContainer.displayName = 'CartItemContainer';

export default CartItemContainer;
