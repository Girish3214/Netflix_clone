import React, { useEffect, useState } from 'react' 
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import "./Nav.css"

const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      color: 'white',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
}));

const Nav = () => {
    const classes = useStyles();

    const [show, handleShow] = useState()

    useEffect(()=>{
        window.addEventListener("scroll", ()=> {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false);
            }
        });
        return ()=>{
            window.removeEventListener("scroll");
        }

    },[])

    return (
        <div className= {`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src= "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix logo"
            />

        <div className={`classes.search search`}>
            <div className={`classes.searchIcon search-l`}>
                <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

        </div>
    )
}

export default Nav
