import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { Actions } from '../../lib/actions';


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

    this.gameSearch=this.gameSearch.bind(this);

    this.props.dispatch(Actions.search(""));

  }

  gameSearch(e) {
      this.props.dispatch(Actions.search(e.target.value));
      
  }

  render() {
    const { classes } = this.props;

    let gameList = this.props.gameList.map(game => {
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
                        onChange={this.gameSearch}
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

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(withStyles(styles)(Application));
