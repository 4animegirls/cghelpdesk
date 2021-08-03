import React, { Component } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import Login from '../login/Login';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark'
    };
  }

  setTheme = (theme) => {
    this.setState({ theme });
  }

  componentWillReceiveProps() {
    console.log({ string: 'componentWillReceiveProps', state: this.state });
    this.setTheme(this.props.theme);
  }

  render() {
    console.log({ string: 'render', theme: this.state.theme });
    return (
      <ApplicationProvider {...eva} theme={this.state.theme == 'dark' ? eva.dark : eva.light}>
        <Login />
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(
  mapStateToProps
)(App)
