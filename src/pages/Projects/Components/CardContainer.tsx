import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

interface CardPropsI {
  title: string;
  description: string;
  onClickHandler?: () => void;
}

const CardContainer = (props: CardPropsI) => {
  const { title, description, onClickHandler } = props;

  return (
    <CardActionArea
      sx={{
        borderRadius: '20px',
        boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
      }}
      onClick={onClickHandler}
    >
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: '20px',
          boxShadow: '0px 2px 8px 0px rgba(99, 99, 99, 0.2)',
          backgroundColor: 'white',
          width: '300px',
          height: '300px',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export default CardContainer;
