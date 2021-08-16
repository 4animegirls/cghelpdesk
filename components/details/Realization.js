import React from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Layout, Text, Icon, CheckBox } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default function Realization({ styles, item }) {
  return (
    <Layout
        style={styles.tab}
        level='2'>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.realization.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
        <ScrollableTextArea title={i18n.t('details.viewPager.realization.description')} text={item.Description} />
        <DetailText title={i18n.t('details.viewPager.realization.version')} text={item.Version} />
        <DetailText title={i18n.t('details.viewPager.realization.solvedInVersion')} text={item.SolvedInVersion} />
        <DetailText title={i18n.t('details.viewPager.assessment.analyzingCapacity')} text={item.AnalyzingCapacity} />
        <DetailText title={i18n.t('details.viewPager.assessment.programmingCapacity')} text={item.ProgrammingCapacity} />
        <View style={styles.row}>
          <CheckBox checked={true}></CheckBox>
          <Text style={[styles.boldText, { marginBottom: 20 }]}>{i18n.t('details.viewPager.realization.filesReady')}</Text>
        </View>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.realization.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
      </Layout>
  )
}
