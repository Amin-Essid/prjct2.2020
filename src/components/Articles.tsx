import React from 'react';
import Article from './Article';

type Props = {
    posts: {
        title: string;
        contentful_id: string;
        mainImage: {
          fluid: any;
        };
        smallImage: {
          fluid: any;
        };
        childContentfulPostDescriptionTextNode: {
          description: string;
        };
        childContentfulPostArticleTextNode: {
          article: string;
        };
      }[];
}

const Articles: React.FC<Props> = ({posts}) => {
    return (
        <>
            <div className='posts'>
                {
                    posts.map((post, index) => {
                        return <Article key={index} post={post}  />
                    })
                }
            </div>
        </>
    )
}

export default Articles