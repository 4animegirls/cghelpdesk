import React, { Component } from 'react';
import { Layout, Text, Divider, List, ListItem, Button, Icon } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
export default class Home extends Component {

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
