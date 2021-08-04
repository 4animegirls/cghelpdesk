import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon, Spinner } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { itemsAction, addItemsAction, addPage } from '../../actions'
import { connect } from 'react-redux'
import data from '../../data.json'
class Home extends Component {
  constructor() {
    super();

  }

  renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  renderItemIcon = (props) => (
    <Icon {...props} name='person' />
  );

  componentDidMount() {
    this.props.itemsAction(this.props.user.Token);

  }

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        title={`${item.Name} (${index + 1})`}
        description={`${item.State.Id} | ${item.CurrentSolver}`}
        accessoryLeft={this.renderItemIcon}
        accessoryRight={this.renderItemAccessory}
      />
    )
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 200+this.props.items.items.length;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };


  render() {
    return (
      // <SafeAreaView >
      <ScrollView
      onScroll={({ nativeEvent }) => {
        if (this.isCloseToBottom(nativeEvent)) {
          this.props.addItemsAction(this.props.user.Token, this.props.items.page+1)
        }
      }}
      scrollEventThrottle={400}
    >
      <Layout style={{ height: '100%', alignItems:'center' }}>
        <List
          data={this.props.items.items }
          renderItem={this.renderItem}
        />
        {this.props.loading && <Spinner status = 'info' style = {{padding: 5}} />}

      </Layout>
    </ScrollView>
  );
      // </SafeAreaView>

  }
}

const mapStateToProps = state => ({
  items: state.items,
  user: state.user,
  loading: state.loading
})


const mapDispatchToProps = dispatch => ({
  itemsAction: (token, page=1) => dispatch(itemsAction(token, page)),
  addItemsAction: (token, page) => dispatch(addItemsAction(token, page)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
