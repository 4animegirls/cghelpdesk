import React, { Component } from 'react';
import { Layout, Text, Select, SelectItem, Divider, ViewPager, Icon, BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction, CheckBox, Button } from '@ui-kitten/components';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, ViewComponent } from 'react-native';
import DetailText from '../customComponents/DetailText';
import { useNavigation } from '@react-navigation/native';
import ScrollableTextArea from '../customComponents/ScrollableTextArea'
import { Input } from '@ui-kitten/components';
import Table from '../customComponents/Table';
import i18n from 'i18n-js';


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
                <Text style={styles.text}>{item.From}</Text>
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
            <DetailText title="Priorita" text={item.Priority?.Name} />
            <DetailText title="Požadovaný termín realizácie" text={item.DueDate} />
            <DetailText title="Zákazník" text={item.Customer.Name} />
            <DetailText title="Typ serv. zmluvy" text={item.Contract?.Type} />
            <DetailText title="Položka serv. zmluvy" text={item.Contract?.Item} />
            <DetailText title="Zamestnanec" text={item.CurrentSolver} />
            <DetailText title="Prístup na VZS" text={item.Access} />
            <DetailText title="Typ pracovnej zmlúvy" text={item.EmploymentContractType} />
          </Layout>

          <Layout style={{ display: 'flex' }}>
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
                <ScrollableTextArea title="Opis" text={item.Description} />
                <View style={styles.row}>
                  <Text style={[styles.boldText, { marginVertical: 20 }]}>Pilot: </Text>
                  <CheckBox checked={item.Pilot}></CheckBox>
                </View>
                <View style={styles.row}>
                  <Text style={[styles.boldText, { marginBottom: 20 }]}>Opakovateľná: </Text>
                  <CheckBox checked={item.Repeatable}></CheckBox>
                </View>
                <Divider />
                <DetailText title="Forma Zadania" text={item.OriginForm} />
                <DetailText title="Na koľkých PC" text={item.DeviceCount} />
                <ScrollableTextArea title="Návrh riešenia" text={item.SolutionPropose} />
                <DetailText title="Zadal" text={item.Creator} />
                <DetailText title="Verzia" text={item.Version} />
                <DetailText title="Dátum zápisu" text={item.CreateDate} />
                <DetailText title="Kapacita celkom" text={item.Capacity} />
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
                  <Table
                    item={item}
                    header={<View style={styles.tableRow} key="0">
                              <View style={{flex: 2}}><Text style={styles.tableText}>Názov súboru</Text></View>
                              <View style={{flex: 2}}><Text style={styles.tableText}>Typ súboru</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Otvoriť</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Zmazať</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Stav</Text></View>
                              <View style={{flex: 2}}><Text style={styles.tableText}>Užívateľ</Text></View>
                            </View>}
                  />
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
                <ScrollableTextArea title="Podklady na schválenie" text={item.Description} />
                <DetailText title="Požadované vo" text={""} />
                <DetailText title="posúdiť do" text={item.ReviewDueDate} />
                <DetailText title="verzii" text={item.Version} />
            
                <DetailText title="Priorita riešenia" text={item.SolvingPriority} />
                <DetailText title="Kategória požiadavky" text={item.RequestCategory} />
                <DetailText title="Forma riešenia" text={item.SolvingForm} />
                <DetailText title="Kapacita" text={item.Capacity} /><Text>hod. (resp. osôb na deň v prípade položky SZ - školenie)</Text>
                <DetailText title="Kapacita analýza" text={item.AnalyzingCapacity}/>                
                <DetailText title="Kapacita programovanie" text={item.ProgrammingCapacity}/>                
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
                <ScrollableTextArea title="Realizácia" text={item.Description} />
                <DetailText title="Zaradené do verzia" text={item.Version} />
                <DetailText title="Vyriešené vo verzii" text={item.SolvedInVersion} />
                <DetailText title="Kapacita analýza" text={item.AnalyzingCapacity} />
                <DetailText title="Kapacita programovanie" text={item.ProgrammingCapacity} />
                <View style={styles.row}>
                  <CheckBox checked={true}></CheckBox>
                  <Text style={[styles.boldText, { marginBottom: 20 }]}>Súbory pripravené </Text>
                </View>
                <View style={styles.tabHeader}>
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
                <ScrollableTextArea title="Ukončenie" text={item.Description} />
                <DetailText title="Vyriešené vo verzii" text={item.Version} />
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
                <View>
                  <Table
                    item={item}
                    header={<View style={styles.tableRow} key="0">
                              <View style={{flex: 2}}><Text style={styles.tableText}>Stav</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Dátum zaslania</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Aktuálny riešiteľ</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Opis</Text></View>
                            </View>}
                  />
                </View>
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
                <View style={styles.row}>
                  <DetailText title="Používateľ" text={""}></DetailText><Button size="medium">Pridať</Button>
                </View>
                <DetailText title="E-mail" text={""} />
                <View>
                  <Table
                    item={item}
                    header={<View style={styles.tableRow} key="0">
                              <View style={{flex: 3}}><Text style={styles.tableText}>Komu zaslať</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}></Text></View>
                            </View>}
                  />
                </View>
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
                <View style={styles.row}>
                  <CheckBox checked={true}></CheckBox>
                  <Text style={[styles.boldText, { marginBottom: 20 }]}>Chybu zobraziť všetkým používateľom</Text>
                </View>
                <ScrollableTextArea title="Text hotline" text={""} />
                <View style={[styles.row, { justifyContent: 'space-between', textAlign: 'center' }]}>
                  <DetailText title="Dátum započítanie upgrade" /><Text style={{ marginHorizontal: 'auto' }} disabled >Lorem Time</Text>
                </View>
                <View style={[styles.row, { justifyContent: 'space-between', textAlign: 'center' }]}>
                  <DetailText title="Zobraziť upgrade všetkým" /><CheckBox style={{ marginHorizontal: 'auto' }} disabled></CheckBox>
                </View>
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
                <Text>Zlúčiť môžete len pripomienku, ktorá sa rieši (nie je v stave 900, 901 a 251) a nie je nikde v systéme označená ako hlavná. Ak chcete zrušiť zlúčenie, chodťe na hlavnú pripomienku a tam vykonajte zmeny.</Text>
                <View>
                  <Table
                    item={item}
                    header={<View style={styles.tableRow} key="0">
                              <View style={{flex: 3}}><Text style={styles.tableText}>ID hlavnej pripomienky</Text></View>
                              <View style={{flex: 3}}><Text style={styles.tableText}>Názov hlavnej pripomienky</Text></View>
                              <View style={{flex: 3}}><Text style={styles.tableText}>ID duplicitnej pripomienky</Text></View>
                              <View style={{flex: 3}}><Text style={styles.tableText}>Názov duplicitnej pripomienky</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Upraviť</Text></View>
                              <View style={{flex: 1}}><Text style={styles.tableText}>Zmazať</Text></View>
                            </View>}
                  />
                </View>
                <Button size='medium'>Pridať</Button>
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
                <DetailText title="Otestované vo verzii" text={item.TestInVersion} />
                <ScrollableTextArea title="Testovanie (inštrukcie)" text={item.TestDescription} />
                <ScrollableTextArea title="Záver z testovania" text={item.TestResult} />
                <View style={styles.tabHeader}>
                  <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
                  <Text category='h5'>Testovanie</Text>
                </View>
              </Layout>
            </ViewPager>
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