import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
export default class Home extends Component {

  data = this.props.items

  renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  renderItemIcon = (props) => (
    <Icon {...props} name='person' />
  );

  componentDidMount(){
    this.props.itemsAction(this.props.user.Token)
  }

  renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={this.renderItemIcon}
      accessoryRight={this.renderItemAccessory}
    />
  );

  render() {
    return (
      <SafeAreaView>
        <Layout style={{ height: '100%' }}>
          <List
            data={this.data}
            renderItem={this.renderItem}
          />
        </Layout>
      </SafeAreaView>
    );
  }
}


const mapStateToProps = state => ({
  items : state.items,
  user: state.user
})


const mapDispatchToProps = dispatch => ({
  itemsAction: token => dispatch(itemsAction(token))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
