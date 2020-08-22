// import { Link } from "gatsby"
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';

type Logo = {
            logo: { 
                nodes: {  
                    childImageSharp: {
                    fixed: any;
            }}[];
    }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
        },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header: React.FC = () => {
    const {logo} = useStaticQuery<Logo>(graphql`
    {
      logo: allFile(filter: {relativeDirectory: {eq: "logo"}}) {
        nodes {
          childImageSharp {
            fixed {
                ...GatsbyImageSharpFixed 
            }
          }
        }
      }
    }
  `)
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <AppBar elevation={0} style={{backgroundColor: "white"}} position="static">
          <Toolbar className="toolbar">
            <a href="https://www.facebook.com/%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF-%D8%A8%D8%A7%D9%84%D9%81%D9%84%D9%91%D8%A7%D9%82%D9%8A-133076093450347" target="blank">
            <IconButton edge="start" className={classes.menuButton} color="inherit">
              <FacebookIcon style={{color: '#276ac6', height: '50px', width: '50px'}} />
            </IconButton>
            </a>
            <Link to="/">
            <Button color="inherit" style={{marginRight:'-8px'}}>
              <Image fixed={logo.nodes[0].childImageSharp.fixed} />
            </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default Header


