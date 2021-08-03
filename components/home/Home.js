import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { itemsAction } from '../../actions'
import { connect } from 'react-redux'
class Home extends Component {


  renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  renderItemIcon = (props) => (
    <Icon {...props} name='person' />
  );

  componentDidMount() {
    this.props.itemsAction(this.props.user.Token)
  }

  renderItem = ({ item, index }) => {
    3
    return (
      <ListItem
        title={`${item.Name}`}
        description={`${item.State.Id} | ${item.CurrentSolver}`}
        accessoryLeft={this.renderItemIcon}
        accessoryRight={this.renderItemAccessory}
      />
    )
  };

  render() {
    return (
      <SafeAreaView >
          <Layout style={{ height: '100%' }}>
            <List
              data={this.props.items}
              renderItem={this.renderItem}
            />
          </Layout>
      </SafeAreaView>

    );
  }
}


const mapStateToProps = state => ({
  items: state.items,
  user: state.user
})


const mapDispatchToProps = dispatch => ({
  itemsAction: token => dispatch(itemsAction(token))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
