import React, { Component } from 'react';
import { Layout, Text, Divider, Button, Icon, List, ListItem, Spinner, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { itemsAction, addItemsAction, itemsStatesAction } from '../../actions'
import { connect } from 'react-redux'
import Filter from './Filter'


class Home extends Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }

  clickOnListItemAction = (Item) => {
    this.navigation.navigate('Details', Item);
  }

  renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  renderItemIcon = (props) => (
    <Icon {...props} name='menu-outline' />
  );

  componentDidMount() { 
    this.props.itemsAction(this.props.user.Token);
    this.props.itemsStatesAction(this.props.user.Token);

  }

  renderItem = ({ item, index }) => {

    return (

      <ListItem
        key={`${item.Id}`}
        title={`${item.Name} (${index + 1})`}
        description={`${item.State.Id} | ${item.CurrentSolver}`}
        accessoryLeft={this.renderItemIcon}
        accessoryRight={this.renderItemAccessory}
        onPress={() => this.clickOnListItemAction(item)
        }
      />
    )
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 200 + this.props.items.items.length;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };


  MenuIcon = (props) => (
    <Icon {...props} name='menu-outline' />
  );

  renderDrawerAction = () => (
    <TopNavigationAction icon={this.MenuIcon} onPress={() => this.props.navigation.openDrawer()} />
  );

  renderFilter = () => (
    <Filter />
  );

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
        onScroll={({ nativeEvent }) => {
          if (this.isCloseToBottom(nativeEvent)) {
            this.props.addItemsAction(this.props.user.Token, this.props.items.page + 1)
          }
        }}
        scrollEventThrottle={400}
      >
        <TopNavigation
          title='Home'
          accessoryLeft={this.renderDrawerAction}
          accessoryRight={this.renderFilter}

        />
        <Divider />
        <Layout >
          <List
            data={this.props.items.items}
            renderItem={this.renderItem}
          />
          {this.props.loading && <Spinner status='info' style={{ padding: 5 }} />}
        </Layout>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  user: state.user,
  loading: state.loading
})


const mapDispatchToProps = dispatch => ({
  itemsAction: (token, page = 1) => dispatch(itemsAction(token, page)),
  addItemsAction: (token, page) => dispatch(addItemsAction(token, page)),
  itemsStatesAction: (token) => dispatch(itemsStatesAction(token)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
