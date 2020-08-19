// import { Link } from "gatsby"
import React from "react"
import { createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
        },
    appBar: {
          top: 'auto',
          bottom: 0,
        },
    title: {
      flexGrow: 1,
      fontFamily: "Tajawal",
      fontSize: "1rem",
    },
  }),
);



const Footer: React.FC = () => {
    const classes = useStyles();
    return(
        <AppBar style={{backgroundColor: '#276ac6'}} position="fixed" className={classes.appBar}>
          <Toolbar className="footer">
            <p className={classes.title}>
              جميع الحقوق محفوظة بالفلاقي 2020
            </p>
          </Toolbar>
        </AppBar>
    )
}

export default Footer