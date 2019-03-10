///////////////////////////////////////////////////////////////////////////////////////
//                                   React                                           //
///////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react';

///////////////////////////////////////////////////////////////////////////////////////
//                                   Redux                                           //
///////////////////////////////////////////////////////////////////////////////////////
import { connect } from 'react-redux';
import { Actions } from '../../lib/actions';

///////////////////////////////////////////////////////////////////////////////////////
//                                  Material                                         //
///////////////////////////////////////////////////////////////////////////////////////
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

///////////////////////////////////////////////////////////////////////////////////////
//                                 Components                                        //
///////////////////////////////////////////////////////////////////////////////////////
import Body from "../body/body";
import Header from "../header/header";
import Navigation from "../navigation/navigation";

const styles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
    },
});

class Application extends Component {
  constructor (props){
    super (props);

    this.state = {
        open: false,
      };
    
    this.handleDrawerOpen=this.handleDrawerOpen.bind(this);

    this.handleDrawerClose=this.handleDrawerClose.bind(this);

    this.gameSearch=this.gameSearch.bind(this);

    this.props.dispatch(Actions.search(""));

  }

  gameSearch(e) {
      this.props.dispatch(Actions.search(e.target.value));
  }

  handleDrawerOpen() {
      this.props.dispatch(Actions.toggleNav(true));
  };

  handleDrawerClose() {
      this.props.dispatch(Actions.toggleNav(false));
  };

  render() {
    const { classes, theme } = this.props;

    return ( <div className={classes.root}>
        <CssBaseline />
        <Header
            onSearch={this.gameSearch}
            openNav={this.props.navigation}
            onOpenNav={this.handleDrawerOpen}
        />
        <Navigation
            openNav={this.props.navigation}
            onCloseNav={this.handleDrawerClose}
        />
        <Body gameList={this.props.gameList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(withStyles(styles, { withTheme: true } )(Application));
