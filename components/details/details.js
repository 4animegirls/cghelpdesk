import React, { Component } from 'react';
import { Layout, Text, Select, SelectItem, Divider, ViewPager, Icon, BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import DetailText from '../customComponents/DetailText'
import { useNavigation } from '@react-navigation/native';


class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: ''
    }
  }

  setSelectedIndex = (index) => {
    this.setState({ selectedIndex: index });
  }

  MenuIcon = (props) => (
    <Icon {...props} name='arrow-back-outline' />
  );

  renderDrawerAction = () => (
    <TopNavigationAction icon={this.MenuIcon} onPress={() => this.props.navigation.goBack()} />
  );

  render() {
    const item = this.props.route.params;
    return (
      <ScrollView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <TopNavigation
          title='Details'
          accessoryLeft={this.renderDrawerAction}
        />
        <Divider />
        <Layout style={{ height: '100%' }}>
          <Layout style={{ paddingBottom: 108 }}>
            <Text style={styles.boldText}>Názov: </Text>
            <View>
              <Text style={styles.text}>{item.Name}</Text>
              {/* <Select
                style={styles.button}
                selectedIndex={this.state.selectedIndex}
                onSelect={index => this.setSelectedIndex(index)}>
                <SelectItem title='Option 1' />
                <SelectItem title='Option 2' />
                <SelectItem title='Option 3' />
                <SelectItem title='Option 4' />
              </Select> */}
              <Divider style={styles.divider} />
            </View>
            <Layout style={styles.row}>
              <View>
                <Text style={styles.boldText}>Od: </Text>
                <Text style={styles.text}>{item.CurrentSolver}</Text>
              </View>
              <View>
                <Text style={styles.boldText}>ID: </Text>
                <Text style={styles.text}>{item.Id}</Text>
              </View>
            </Layout>
            <Divider style={styles.divider} />
            <View>
              <Text style={{ marginHorizontal: 8, marginTop: 10, fontWeight: '700', fontSize: 28, textAlign: 'center' }}>Správa: </Text>
              <DetailText title="Informačný systém" text={item.InformationSystem.Name} />
            </View>
            <DetailText title="Produkt" text={item.Product.Name} />
            <DetailText title="Typ" text={item.Type.Name} />
            <DetailText title="Priorita" text={item.SolvingPriority} />
            <DetailText title="Požadovaný termín realizácie" text={item.DueDate} />
            <DetailText title="Zákazník" text={item.Customer.Name} />
            <DetailText title="Typ serv. zmluvy" text={"?"} />
            <DetailText title="Položka serv. zmluvy" text={"?"} />
            <DetailText title="Zamestnanec" text={item.CurrentSolver} />
            <DetailText title="Prístup na VZS" text="Nie je zadaný správca!" />
          </Layout>
          <Layout>
            <ViewPager
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              <Layout
                style={styles.tab}
                level='2'>
                <Text category='h5'>USERS </Text>
                <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
              </Layout>
              <Layout
                style={styles.tab}
                level='2'>
                <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                <Text category='h5'>ORDERS</Text>
                <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
              </Layout>
              <Layout
                style={styles.tab}
                level='2'>
                <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                <Text category='h5'>TRANSACTIONS</Text>
              </Layout>
            </ViewPager>
          </Layout>
          <Layout>
            <BottomNavigation
              style={{ marginBottom: 36 }}
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              <BottomNavigationTab title='USERS' />
              <BottomNavigationTab title='ORDERS' />
              <BottomNavigationTab title='TRANSACTIONS' />
            </BottomNavigation>
          </Layout>
        </Layout>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  divider: {
    marginTop: 8
  },
  button: {
    marginHorizontal: 8,
    marginTop: 10
  },
  boldText: {
    marginHorizontal: 8,
    marginTop: 10,
    fontWeight: '700',
    fontSize: 18
  },
  text: {
    fontSize: 18,
    marginHorizontal: 8
  },
  center: {
    textAlign: 'center',
  },
  row: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 192,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default function Details(props) {
  const navigation = useNavigation();
  return <DetailsScreen {...props} navigation={navigation} />
}
