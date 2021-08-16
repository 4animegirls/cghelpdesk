import React from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default function Testing({ styles, item }) {
  return (
    <Layout
        style={styles.tab}
        level='2'>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.testing.name')}</Text>
        </View>
        <DetailText title={i18n.t('details.viewPager.testing.testInVersion')} text={item.TestInVersion} />
        <ScrollableTextArea title={i18n.t('details.viewPager.testing.testDescription')} text={item.TestDescription} />
        <ScrollableTextArea title={i18n.t('details.viewPager.testing.testResult')} text={item.TestResult} />
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.testing.name')}</Text>
        </View>
      </Layout>
  )
}
