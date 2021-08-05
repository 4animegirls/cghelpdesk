import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon, Spinner, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { itemsAction, addItemsAction, addPage } from '../../actions'
import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import Details from '../details/details'

class Home extends Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation

  }

  clickOnListItemAction = () => {
    this.navigation.navigate('Details');
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
        onPress={() => this.clickOnListItemAction()}
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

  render() {
    return (
      <ScrollView
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
        />
        <Divider />
        <Layout style={{ height: '100%', alignItems: 'center' }}>
          <List
            data={this.props.items.items}
            renderItem={this.renderItem}
          />
          {this.props.loading && <Spinner status='info' style={{ padding: 5 }} />}
        </Layout>
      </ScrollView>
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
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
