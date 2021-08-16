import React from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default function Conclusion({ styles, item }) {
  return (
    <Layout
        style={styles.tab}
        level='2'>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.conclusion.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
        <ScrollableTextArea title={i18n.t('details.viewPager.conclusion.description')} text={item.Description} />
        <DetailText title={i18n.t('details.viewPager.conclusion.solvedInVersion')} text={item.Version} />
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.conclusion.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
      </Layout>
  )
}
