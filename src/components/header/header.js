///////////////////////////////////////////////////////////////////////////////////////
//                                   React                                           //
///////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import classNames from 'classnames';

///////////////////////////////////////////////////////////////////////////////////////
//                                  Material                                         //
///////////////////////////////////////////////////////////////////////////////////////
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

///////////////////////////////////////////////////////////////////////////////////////
//                                 Components                                        //
///////////////////////////////////////////////////////////////////////////////////////
import GYKLogo from "./GYK_Logo.png";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    header: {
        paddingRight: 24,
        alignItems: 'center',
    },
    logo: {
        height: 30,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
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

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
            [classes.appBarShift]: this.props.openNav,
            })}
        >
            <Toolbar className={classes.header} disableGutters={!this.props.openNav}>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.props.onOpenNav}
                className={classNames(classes.menuButton, {
                [classes.hide]: this.props.openNav,
                })}
            >
                <MenuIcon />
            </IconButton>
            <img src={GYKLogo} className={classes.logo}></img>
            <div className={classes.grow} />
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    onChange={this.props.onSearch}
                    placeholder="Search…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                />
            </div>
            </Toolbar>
        </AppBar>
    );
  }
}

export default withStyles(styles, { withTheme: true } )(Header);