///////////////////////////////////////////////////////////////////////////////////////
//                                   React                                           //
///////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
import classNames from 'classnames';

///////////////////////////////////////////////////////////////////////////////////////
//                                  Material                                         //
///////////////////////////////////////////////////////////////////////////////////////
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import GamepadOutlined from '@material-ui/icons/GamepadOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';

const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
});

class Navigation extends Component {

  render() {
    const { classes, theme } = this.props;

    return (
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.props.openNav,
            [classes.drawerClose]: !this.props.openNav,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.props.openNav,
              [classes.drawerClose]: !this.props.openNav,
            }),
          }}
          open={this.props.openNav}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.props.onCloseNav}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Games', 'Add Score'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <GamepadOutlined /> : <EditOutlined />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true } )(Navigation);