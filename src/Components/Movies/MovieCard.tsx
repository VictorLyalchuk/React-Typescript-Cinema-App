import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cinema from '../../Assets/Images/cinema.png';
import { IMovie } from './movie';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

export default function MovieCard({ title, year, imageUrl, description, loading = true }: IMovie) {

  return (
    <Card sx={{ 
      //  height: 680, width: 300
        }}>

      {loading ? (
        <Skeleton sx={{ height: 600 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          sx={{  }}
          component="img"
          src={`${imageUrl}`}
          title={title}
        />
      )}
      <CardContent sx={{ maxHeight: 450 }}>
        {loading ? (
          <React.Fragment>
            <Skeleton  height= {60} animation="wave" />
            <Skeleton animation="wave" height={200}  />
          </React.Fragment>
        ) : (
          <div>
            <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: 60 }}>
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {year}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ minHeight: 200 }}>
              {description}
            </Typography>
          </div>
        )}
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
