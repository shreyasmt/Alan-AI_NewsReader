import React, {useState, useEffect, createRef} from 'react'
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import useStyles from './Newscardstyles';
import classNames from 'classnames';

const Newscard = ({article:{description, publishedAt, source, title, url, urlToImage}, i, activearticle}) => {
   const classes = useStyles();
   const [eleref, seteleref] = useState([]);
   const scrollToRef =(ref) =>window.scroll(0, ref.current.offsetTop - 50);
   useEffect(()=>{
        seteleref((refs)=> Array(20).fill().map((_,j) => refs[j] || createRef()));
   },[]);
   useEffect(()=>{
        if(i === activearticle && eleref[activearticle]){
            scrollToRef(eleref[activearticle]);
        }
   },[i, activearticle, eleref]);
    return (
        <Card ref={eleref[i]} className={classNames(classes.card, activearticle === i ? classes.activeCard : null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={ urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'}/>
                    <div className={classes.details}>
                            <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt).toDateString())}</Typography>
                            <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                    </div>
                        <Typography gutterBottom variant="h5" className={classes.title}>{title}</Typography>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                        </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
            </CardActions>
        
        </Card>
    )
}

export default Newscard
