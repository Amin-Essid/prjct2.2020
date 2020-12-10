import React from "react"
import Image from "gatsby-image"
import Paper from "@material-ui/core/Paper"
import { Link } from "gatsby"

type Props = {
  post: {
    article: {
      article: string
    }
    description: {
      description: string
    }
    contentful_id: string
    title: string
    mainImage: {
      fluid: any
    }
    smallImage: {
      fluid: any
    }
    slug: string
  }
}

const Article: React.FC<Props> = ({ post }) => {
  const {
    smallImage: { fluid: demoImage },
    title,
    slug,
  } = post
  return (
    <>
      <Link to={`/${slug}`}>
        <Paper elevation={2} className="post">
          <div className="post-img">
            <Image fluid={demoImage} />
          </div>
          <p className="post-title">{title}</p>
        </Paper>
      </Link>
    </>
  )
}

export default Article
