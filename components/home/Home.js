import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class HomeScreen extends Component {
  data = new Array(100).fill({
    title: 'Title for Item',
    description: 'Description for Item',
  });

  renderItemAccessory = (props) => (
    <Button size='tiny'>FOLLOW</Button>
  );

  renderItemIcon = (props) => (
    <Icon {...props} name='person' />
  );

  renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={this.renderItemIcon}
      accessoryRight={this.renderItemAccessory}
    />
  );

  MenuIcon = (props) => (
    <Icon {...props} name='menu-outline' />
  );

  renderDrawerAction = () => (
    <TopNavigationAction icon={this.MenuIcon} onPress={() => this.props.navigation.openDrawer()} />
  );

  render() {
    return (
      <SafeAreaView>
        <Layout style={{ height: '100%' }}>
          <TopNavigation
            title='Home'
            accessoryLeft={this.renderDrawerAction}
          />
          <Divider />
          <List
            data={this.data}
            renderItem={this.renderItem}
          />
        </Layout>
      </SafeAreaView>
    );
  }
}

export default function Home(props) {
  const navigation = useNavigation();
  return <HomeScreen {...props} navigation={navigation} />
}