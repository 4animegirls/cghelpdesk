import React from 'react';
import Table from '../customComponents/Table';
import { Layout, Text, Icon, Button } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default function Email({ styles, item }) {
  return (
    <Layout
      style={styles.tab}
      level='2'>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.email.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
      <View style={styles.row}>
        <DetailText title={i18n.t('details.viewPager.email.user')} text={""}></DetailText>
        <Button size="medium">{i18n.t('details.viewPager.files.add')}</Button>
      </View>
      <DetailText title={i18n.t('details.viewPager.email.name')} text={""} />
      <View>
        <Table
          item={item}
          header={<View style={styles.tableRow} key="0">
            <View style={{ flex: 3 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.email.sendTo')}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.tableText}></Text></View>
          </View>}
        />
      </View>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.email.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
    </Layout>
  )
}
