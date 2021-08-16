import React from 'react'
import { Input } from '@ui-kitten/components';
import Table from '../customComponents/Table';
import { Layout, Text, Icon, Button } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';


export default function Files({ styles, item }) {
  return (
    <Layout
        style={styles.tab}
        level='2'>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.files.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
        <View style={[styles.row, { justifyContent: 'space-around' }]}>
          <Input placeholder={i18n.t('details.viewPager.files.addPlaceholder')} />
          <Button size='small' appearance="outline" >{i18n.t('details.viewPager.files.browse')}</Button>
          <Button size='small'>{i18n.t('details.viewPager.files.add')}</Button>
        </View>
        <View>
          <Table
            item={item}
            header={<View style={styles.tableRow} key="0">
              <View style={{ flex: 2 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.name')}</Text></View>
              <View style={{ flex: 2 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.type')}</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.open')}</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.delete')}</Text></View>
              <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.state')}</Text></View>
              <View style={{ flex: 2 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.files.table.user')}</Text></View>
            </View>}
          />
        </View>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.files.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
      </Layout>
  )
}
