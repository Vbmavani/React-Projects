//import React from 'react'
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };


var SearchCard=(props)=>{
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;
    console.log(props,'props');
    return(
        <div>
            <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.details.name}
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          {props.details.name}
        </Typography>
        
        <Typography component="p">
          {props.details.address}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      </Card>
        </div>
    )
}

export default withStyles(styles)(SearchCard)