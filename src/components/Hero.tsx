import React from 'react';
import Image from 'gatsby-image';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//     },
//   });

type Props = {
    post: {
        childContentfulPostArticleTextNode: {
            article: string;
        };
        childContentfulPostDescriptionTextNode: {
            description: string;
        };
        contentful_id: string;
        title: string;
        mainImage: {
            fluid: any;
        }
    }
}

const Hero: React.FC<Props> = ({post}) => {
//   const classes = useStyles();

  return (
    
    <div className="hero-section">
        <div className="hero-img">
            <Image fluid={post.mainImage.fluid} />
        </div>
        <h2 className='hero-title'>
            {post.title}
        </h2>
    </div>
  );
}

export default Hero


// <Card elevation={0} className="hero-section">
      {/* <CardActionArea> */}
        {/* <CardMedia
          component={Image}
        //   className={classes.media}
          image={post.mainImage.fluid}
          title="Contemplative Reptile"
        /> */}
        {/* <CardHeader
            avatar={ */}
            // <div className="hero-img">
            //     <Image fluid={post.mainImage.fluid} />
            // </div>
            {/* }
        /> */}
        {/* </CardMedia> */}
        {/* <CardContent> */}
        //   <Typography component="h2">
        //     {post.title}
        //   </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            {post.childContentfulPostDescriptionTextNode.description}
          </Typography> */}
        {/* </CardContent>
      </CardActionArea> */}
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    // </Card>