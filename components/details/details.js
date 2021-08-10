import React, { Component } from 'react';
import { Layout, Text, Select, SelectItem, Divider, ViewPager, Icon, BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction, CheckBox, Button } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, ViewComponent } from 'react-native';
import DetailText from '../customComponents/DetailText';
import { useNavigation } from '@react-navigation/native';
import ScrollableTextArea from '../customComponents/ScrollableTextArea'
import { Input } from '@ui-kitten/components';


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
        <Layout>
          <Layout style={{ paddingBottom: 108 }}>
            <Text style={styles.boldText}>Názov: </Text>
            <View>
              <Text style={styles.text}>{item.Name}</Text>
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
                <View style={styles.tabHeader}>
                  <Text category='h5'>Podrobné informácie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
                <ScrollableTextArea title="Opis" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                <View style={styles.row}>
                  <Text style={[styles.boldText, { marginVertical: 20 }]}>Pilot: </Text>
                  <CheckBox checked={item.Pilot}></CheckBox>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.boldText, { marginBottom: 20 }]}>Opakovateľná: </Text>
                  <CheckBox checked={item.Pilot}></CheckBox>
                </View>
                <Divider />
                <DetailText title="Forma Zadania" text={"HelpDesk"} />
                <DetailText title="Na koľkých PC" text={"Number of PC"} />
                <ScrollableTextArea title="Návrh riešenia" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." />
                <DetailText title="Zadal" text={""} />
                <DetailText title="Verzia" text={""} />
                <DetailText title="Dátum zápisu" text={""} />
                <DetailText title="Kapacita celkom" text={"n hod."} />
                <View style={styles.tabHeader}>
                  <Text category='h5'>Podrobné informácie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Pripojené súbory</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
                <View style={[styles.row, { justifyContent: 'space-around' }]}>
                  <Input placeholder="Pridať súbor..." />
                  <Button size='small' appearance="outline" >Browse...</Button>
                  <Button size='small'>Pridať</Button>
                </View>
                <View>
                  {/* INSERT TABLE HERE */}
                </View>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Pripojené súbory</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Posúdenie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
                <ScrollableTextArea title="Podklady na schávlenie" text={""} />
                <DetailText title="Požadované vo" text={""} />
                <DetailText title="posúdiť do" text={""} />
                <DetailText title="verzii" text={""} />
                <DetailText title="Priorita riešenia" text={""} />
                <DetailText title="Kategória požiadavky" text={""} />
                <DetailText title="Forma riešenia" text={""} />
                <DetailText title="Kapacita" text={""} /><Text>hod. (resp. osôb na deň v prípade položky SZ - školenie)</Text>
                <Text>Kapacita analýza:8 hod.</Text>
                <Text>Kapacita programovania:32 hod.</Text>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Posúdenie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Realizácia</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
                <ScrollableTextArea title="Realizácia" text={""} />
                <DetailText title="Zaradené do verzia" text={""} />
                <DetailText title="Vyriešené vo verzii" text={""} />
                <DetailText title="Kapacita analýza" text={""} /> hod.
                <DetailText title="Kapacita programovanie" text={""} /> hod.
                <View style={styles.row}>
                  <CheckBox checked={true}></CheckBox>
                  <Text style={[styles.boldText, { marginBottom: 20 }]}>Súbory pripravené </Text>
                </View>
                <View>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Realizácia</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Ukončenie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
                <ScrollableTextArea title="Ukončenie" text={""}/>
                <DetailText title="Vyriešené vo verzii" text={""}/>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Ukončenie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Workflow</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
                {/* INSERT TABLE HERE */}
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Workflow</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>E-mail</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>HotLine</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Zlúčenie</Text>
                  <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
                </View>
              </Layout>

              <Layout
                style={styles.tab}
                level='2'>
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Testovanie</Text>
                </View>
              </Layout>
            </ViewPager>
          </Layout>
          <Layout style={{ marginVertical: 16 }}>
            <Layout style={[styles.row, { justifyContent: 'space-between', paddingHorizontal: 16 }]}>
              <Button>Nový</Button>
              <Button>Nový ako kópia</Button>
              <Button>Uložiť</Button>
            </Layout>
            <Text style={{ marginVertical: 16, marginHorizontal: 8, textAlign: 'center' }}>255 - Požiadavka - na posúdenie POw</Text>
            <Layout style={[styles.row, { justifyContent: 'space-between', paddingHorizontal: 16 }]}>
              <Button>Odošli</Button>
              <Button>Zrušiť</Button>
              <Button>Vytlačiť</Button>
            </Layout>
          </Layout>
          {/* <Layout>
            <BottomNavigation
              // style={{ marginBottom: -56 }}
              selectedIndex={this.state.selectedIndex}
              onSelect={index => this.setSelectedIndex(index)}>
              <BottomNavigationTab title='USERS' />
              <BottomNavigationTab title='ORDERS' />
              <BottomNavigationTab title='TRANSACTIONS' />
              <BottomNavigationTab title='TRANSACTIONS' />
              <BottomNavigationTab title='TRANSACTIONS' />
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
    justifyContent: 'space-around',
    justifyContent: 'center',
    paddingTop: 16
  }
});

export default function Details(props) {
  const navigation = useNavigation();
  return <DetailsScreen {...props} navigation={navigation} />
}
