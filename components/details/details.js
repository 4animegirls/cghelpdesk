import React, { Component } from 'react';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18n-js';

class DetailsScreen extends Component {

  MenuIcon = (props) => (
    <Icon {...props} name='arrow-back-outline' />
  );

  renderDrawerAction = () => (
    <TopNavigationAction icon={this.MenuIcon} onPress={() => this.props.navigation.goBack()} />
  );

  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <TopNavigation
          title={i18n.t('navigation.details')}
          accessoryLeft={this.renderDrawerAction}
        />
        <Divider />
        <Layout style={{ height: '100%' }}>
          <Text>skap</Text>
        </Layout>
      </SafeAreaView>
    );
  }
};

export default function Details(props) {
  const navigation = useNavigation();
  return <DetailsScreen {...props} navigation={navigation} />
}
