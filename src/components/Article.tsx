import React from 'react';
import Image from 'gatsby-image';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }),
);


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
        };
        smallImage: {
            fluid: any;
        };
    }
}

const Article: React.FC<Props> = ({post}) => {
    const classes = useStyles();
    console.log(post)
    const {childContentfulPostArticleTextNode: { article }, childContentfulPostDescriptionTextNode: {description}, smallImage: {fluid : demoImage}, mainImage: {fluid : articleImage}, title, contentful_id } = post
    return (
        <>
            <Paper elevation={1} className='post'>
                <p className="post-title">
                    {title}
                </p>
                <div className="post-img">
                    <Image fluid={demoImage} /> 
                </div>
            </Paper>
        </>
    )
}

export default Article

