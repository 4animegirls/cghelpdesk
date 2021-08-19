import React, { Component } from 'react';
import { Layout, Text, Divider, Button, Icon, List, ListItem, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ScrollView, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { itemsAction, addItemsAction, itemsStatesAction } from '../../actions'
import { connect } from 'react-redux'
import Filter from './Filter'
import Loading from '../loadingPanel/Loading';
import i18n from 'i18n-js';


class Home extends Component {
  constructor({ navigation }) {
    super();
    this.navigation = navigation;
  }

  clickOnListItemAction = (Item) => {
    this.navigation.navigate('Details', Item);
  }

  renderItemAccessory = (item, props) => (
    <Button onPress={() => this.clickOnListItemAction(item)} size='tiny'>DETAILS</Button>
  );


  componentDidMount() { 
   this.props.user.Token!=='test' && (
   this.props.itemsAction(this.props.user.Token),
   this.props.itemsStatesAction(this.props.user.Token))    
  }

  renderItem = ({ item, index }) => {

    return (

      <ListItem
        key={`${item.Id}`}
        title={`${item.Name} (${index + 1})`}
        description={`${item.State?.Id} | ${item.CurrentSolver}`}
        accessoryRight={() => this.renderItemAccessory(item)}
        onPress={() => this.clickOnListItemAction(item)}
      />
    )
  };

  isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 200 + this.props.items.items?.length;
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
            this.props.user.Token!=='test' &&
            this.props.addItemsAction(this.props.user.Token, this.props.items.page + 1, [this.props.searchFilter, ['Id', this.props.statesFilter]])
          }
        }}
        scrollEventThrottle={400}
      >
        <TopNavigation
          title={i18n.t('navigation.home')}
          accessoryLeft={this.renderDrawerAction}
          accessoryRight={this.renderFilter}

        />
        <Divider />
        <Layout style = {{alignItems: 'center'}}>
          {this.props.items.items !== null 
          ?
            <List
              data={this.props.items.items}
              renderItem={this.renderItem}
            />
          :
            <Text category = 'h4' style = {{height: Dimensions.get('window').height}}>{i18n.t('home.noitems')}</Text>
            }
          { this.props.user.Token==='test' && <Text category = 'h4' style = {{height: Dimensions.get('window').height}}>{i18n.t('home.noitems')}</Text> }
          {//(this.props.items.page > 1 && this.props.loading===true) && <Spinner />
          } 
  
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
  statesFilter : state.statesFilter,
  searchFilter: state.searchFilter
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
