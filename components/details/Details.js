import React, { Component } from 'react';
import { Layout, Text, Select, SelectItem, Divider, ViewPager, Icon, BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction, CheckBox, Button } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, ViewComponent } from 'react-native';
import DetailText from '../customComponents/DetailText';
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18n-js';
import DetailsViewPager from './DetailsViewPager';


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
          title={i18n.t('navigation.details')}
          accessoryLeft={this.renderDrawerAction}
        />
        <Divider />
        <Layout style={{ height: '100%' }}>
          <Layout style={{ paddingBottom: 108 }}>
            <Text style={styles.boldText}>{i18n.t('details.name')}</Text>
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
                <Text style={styles.boldText}>{i18n.t('details.from')}</Text>
                <Text style={styles.text}>{item.From}</Text>
              </View>
              <View>
                <Text style={styles.boldText}>{i18n.t('details.id')}</Text>
                <Text style={styles.text}>{item.Id}</Text>
              </View>
            </Layout>
            <Divider style={styles.divider} />
            <View>
              <Text style={{ marginHorizontal: 8, marginTop: 10, fontWeight: '700', fontSize: 28, textAlign: 'center' }}>{i18n.t('details.message')}</Text>
              <DetailText title={i18n.t('details.infoSystem')} text={item.InformationSystem.Name} />
            </View>
            <DetailText title={i18n.t('details.product')} text={item.Product.Name} />
            <DetailText title={i18n.t('details.type')} text={item.Type.Name} />
            <DetailText title={i18n.t('details.priority')} text={item.Priority?.Name} />
            <DetailText title={i18n.t('details.duedate')} text={item.DueDate} />
            <DetailText title={i18n.t('details.customer')} text={item.Customer.Name} />
            <DetailText title={i18n.t('details.contractType')} text={item.Contract?.Type} />
            <DetailText title={i18n.t('details.contractItem')} text={item.Contract?.Item} />
            <DetailText title={i18n.t('details.currentSolver')} text={item.CurrentSolver} />
            <DetailText title={i18n.t('details.access')} text={item.Access} />
            <DetailText title={i18n.t('details.employmentContractType')} text={item.EmploymentContractType} />
          </Layout>

          <Layout style={{ display: 'flex' }}>
              <DetailsViewPager styles = { styles } item = { item } />
          </Layout>
          {/* <Layout>
            <BottomNavigation
              // style={{ marginBottom: -56 }}
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              <BottomNavigationTab title='USERS' />
              <BottomNavigationTab title='ORDERS' />
              <BottomNavigationTab title='TRANSACTIONS' />
            </BottomNavigation>
          </Layout> */}
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
  tabHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tab: {
    display: 'flex',
    paddingTop: 16,
    height: '100%',
  },
  tableText: {
    borderColor: 'white',
    borderWidth:1,
    color: 'white',
    fontSize: 10
  },
  tableRow: {
    borderColor: 'white',
    borderWidth:1,
    marginHorizontal: 8,
    display: 'flex',
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default function Details(props) {
  const navigation = useNavigation();
  return <DetailsScreen {...props} navigation={navigation} />
}