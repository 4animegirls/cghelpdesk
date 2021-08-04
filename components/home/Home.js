import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { itemsAction } from '../../actions'
import { connect } from 'react-redux'
import data from '../../data.json'
class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  renderItemIcon = (props) => (
    <Icon {...props} name='person' />
  );

  componentDidMount() {
    this.props.itemsAction(this.props.user.Token);
    this.setState({ data: hardcoded(data.Data.Items) });

  }

  renderItem = ({ item, index }) => {
    3
    return (
      <ListItem
        title={`${item.Name} (${index + 1})`}
        description={`${item.State.Id} | ${item.CurrentSolver}`}
        accessoryLeft={this.renderItemIcon}
        accessoryRight={this.renderItemAccessory}
      />
    )
  };

  renderFirstNItems = (array) => {
    const firstItems = array.slice(0, 20);
    console.log(firstItems);
    return firstItems
  }

  render() {
    return (
      // <SafeAreaView >
      <Layout style={{ height: '100%' }}>
        <List
          data={this.renderFirstNItems(this.state.data)}
          renderItem={this.renderItem}
        />
      </Layout>
      // </SafeAreaView>

    );
  }
}
const hardcoded = (items) => {
  const array = [...items];
  for (let i = 0; i < 30; i++) {
    array.push(...items)
  }
  return array;
};

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
