import React from 'react';
import Table from '../customComponents/Table';
import { Layout, Text, Icon, Button } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';

export default function Merge({ styles, item }) {
  return (
    <Layout
      style={styles.tab}
      level='2'>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.merge.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
      <Text>{i18n.t('details.viewPager.merge.description')}</Text>
      <View>
        <Table
          item={item}
          header={<View style={styles.tableRow} key="0">
            <View style={{ flex: 3 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.merge.objectionId')}</Text></View>
            <View style={{ flex: 3 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.merge.objectionName')}</Text></View>
            <View style={{ flex: 3 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.merge.objectionIdDuplicate')}</Text></View>
            <View style={{ flex: 3 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.merge.objectionNameDuplicate')}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.merge.edit')}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.delete')}</Text></View>
          </View>}
        />
      </View>
      <Button size='medium'>{i18n.t('details.viewPager.files.add')}</Button>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.merge.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
    </Layout>
  )
}
