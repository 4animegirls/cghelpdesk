import { useState } from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Input } from '@ui-kitten/components';
import Table from '../customComponents/Table';
import { Layout, Text, Divider, ViewPager, Icon, CheckBox, Button } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';

export default ({ styles, item}) => {
  const [selectedIndex, setSelectedIndex] = useState('')
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
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
              <View style={{ flex: 2 }}><Text style={styles.tableText}>Názov súboru</Text></View>
              <View style={{ flex: 2 }}><Text style={styles.tableText}>Typ súboru</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Otvoriť</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Zmazať</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Stav</Text></View>
              <View style={{ flex: 2 }}><Text style={styles.tableText}>Užívateľ</Text></View>
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
        <DetailText title="Kapacita analýza" text={item.AnalyzingCapacity} />
        <DetailText title="Kapacita programovanie" text={item.ProgrammingCapacity} />
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
              <View style={{ flex: 2 }}><Text style={styles.tableText}>Stav</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Dátum zaslania</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Aktuálny riešiteľ</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Opis</Text></View>
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
              <View style={{ flex: 3 }}><Text style={styles.tableText}>Komu zaslať</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}></Text></View>
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
              <View style={{ flex: 3 }}><Text style={styles.tableText}>ID hlavnej pripomienky</Text></View>
              <View style={{ flex: 3 }}><Text style={styles.tableText}>Názov hlavnej pripomienky</Text></View>
              <View style={{ flex: 3 }}><Text style={styles.tableText}>ID duplicitnej pripomienky</Text></View>
              <View style={{ flex: 3 }}><Text style={styles.tableText}>Názov duplicitnej pripomienky</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Upraviť</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>Zmazať</Text></View>
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
    </ViewPager>)
}