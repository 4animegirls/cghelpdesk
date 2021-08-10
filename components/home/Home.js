import React, { Component } from 'react';
import { Layout, Text, Divider, Button, Icon, List, ListItem, Spinner, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar, FlatList } from 'react-native';
import { itemsAction, addItemsAction, itemsStatesAction } from '../../actions'
import { connect } from 'react-redux'
import Filter from './Filter'
import Loading from '../loadingPanel/Loading';


class Home extends Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }

  clickOnListItemAction = (Item) => {
    this.navigation.navigate('Details', Item);
  }

  renderItemAccessory = (item,props) => (
    <Button onPress={() => this.clickOnListItemAction(item)} size='tiny'>DETAILS</Button>
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
        accessoryRight={() => this.renderItemAccessory(item)}
        onPress={() => this.clickOnListItemAction(item)}
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
      <ScrollView
        style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
        onScroll={({ nativeEvent }) => {
          if (this.isCloseToBottom(nativeEvent)) {
            this.props.addItemsAction(this.props.user.Token, this.props.items.page + 1, this.props.statesFilter)
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
         
  
        </Layout>
        <Loading />
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  user: state.user,
  loading: state.loading,
  statesFilter : state.statesFilter
})


const mapDispatchToProps = dispatch => ({
  itemsAction: (token, page = 1) => dispatch(itemsAction(token, page)),
  addItemsAction: (token, page, filter = null) => dispatch(addItemsAction(token, page, filter)),
  itemsStatesAction: (token) => dispatch(itemsStatesAction(token)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
