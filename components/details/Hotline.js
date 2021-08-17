import React from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Layout, Text, Icon, CheckBox } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default function Hotline({ styles, item }) {
  return (
    <Layout
      style={styles.tab}
      level='2'>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.hotline.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
      <View style={styles.row}>
        <CheckBox checked={true}></CheckBox>
        <Text style={[styles.boldText, { marginBottom: 20 }]}>{i18n.t('details.viewPager.hotline.showError')}</Text>
      </View>
      <ScrollableTextArea title="Text hotline" text={""} />
      <View style={[styles.row, { justifyContent: 'space-between', textAlign: 'center' }]}>
        <DetailText title={i18n.t('details.viewPager.hotline.upgradeDate')} za /><Text style={{ marginHorizontal: 'auto' }} disabled >Lorem Time</Text>
      </View>
      <View style={[styles.row, { justifyContent: 'space-between', textAlign: 'center' }]}>
        <DetailText title={i18n.t('details.viewPager.hotline.showUpgrade')} /><CheckBox style={{ marginHorizontal: 'auto' }} disabled></CheckBox>
      </View>
      <View style={styles.tabHeader}>
        <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
        <Text category='h5'>{i18n.t('details.viewPager.hotline.name')}</Text>
        <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
      </View>
    </Layout>
  )
}
