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
            <IconButton edge="start" className={classes.menuButton} color="inherit">
              <FacebookIcon style={{color: '#276ac6', height: '50px', width: '50px'}} />
            </IconButton>
            <Button color="inherit" style={{marginRight:'-8px'}}>
              <Image fixed={logo.nodes[0].childImageSharp.fixed} />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

export default Header


