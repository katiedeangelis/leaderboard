import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import GamepadOutlined from '@material-ui/icons/GamepadOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';
import Tooltip from '@material-ui/core/Tooltip';


const styles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

class Body extends Component {

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

    return ( 
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <List paragraph>
                {gameList}
            </List>
        </main>
    );
  }
}

export default withStyles(styles, { withTheme: true } )(Body);