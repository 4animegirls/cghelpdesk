import React from 'react';
import Table from '../customComponents/Table';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';

export default function Workflow({ styles, item }) {
  return (
    <Layout
      style={styles.tab}
      level='2'>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.workflow.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
      <View>
        <Table
          item={item}
          header={<View style={styles.tableRow} key="0">
            <View style={{ flex: 2 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.workflow.state')}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.workflow.sendDate')}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.workflow.currentSolver')}</Text></View>
            <View style={{ flex: 1 }}><Text style={styles.tableText}>{i18n.t('details.viewPager.workflow.description')}</Text></View>
          </View>}
        />
      </View>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.workflow.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
    </Layout>
  )
}
