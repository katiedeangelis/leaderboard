import React, { Component } from 'react';
import './index.scss';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import GamepadOutlined from '@material-ui/icons/GamepadOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import CssBaseline from '@material-ui/core/CssBaseline';
import Tooltip from '@material-ui/core/Tooltip';


const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  });

class Application extends Component {
  constructor (props){
    super (props);

    this.state = {
      games: [
        
      ]
    }

    fetch('/api/getGames') // Call the fetch function passing the url of the API as a parameter
        .then(
            response => response.json(),
            error => console.log('Danger Will Robinson', error)
        )
        .then(data => {
            this.setState({
                games: data
            })
        })
  }
  render() {
    const { classes } = this.props;

    let gameList = this.state.games.map(game => {
      return (
        <ListItem button>
            <ListItemIcon>
                <GamepadOutlined />
            </ListItemIcon>
            <ListItemText
                primary={game.gameName}
            />
            <ListItemSecondaryAction>
                <Tooltip title="Submit Score">
                    <IconButton aria-label="Submit Score">
                    <EditOutlined />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
        )
    })

    return ( <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                GYK Antler 
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                        }}
                    />
                </div>
            </Toolbar>
        </AppBar>
        <List>
            {gameList}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(Application);
