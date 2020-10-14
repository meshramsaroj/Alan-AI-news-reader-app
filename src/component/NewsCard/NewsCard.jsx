import React, { createRef, useState, useEffect } from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography, CardMedia, Button } from "@material-ui/core";
import newsImage from "../../assets/world-news.jpg";
import useStyles from "./styles.js"
import classNames from "classnames"

const NewsCard = ({ i, article: { source, description, publishedAt, title, url, urlToImage }, activeArticle }) => {
  const classes = useStyles();
  const [eleRef, setEleRef] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setEleRef((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArticle && eleRef[activeArticle]) {
      scrollToRef(eleRef[activeArticle]);
    }

  }, [i, activeArticle, eleRef]);


  return (
    <Card ref={eleRef[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || newsImage} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} variant="h6" gutterBottom>{title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{description} </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">Learn More</Button>
        <Typography variant="h5" color="textSecondary">{i + 1}</Typography>
      </CardActions>
    </Card>
  )
}

export default NewsCard;