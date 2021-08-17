import React from 'react';
import { Layout, Text, Icon, CheckBox, Divider } from '@ui-kitten/components';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { View } from 'react-native';


export default function DetailedInfo({ styles, item }) {
  return (
    <Layout
        style={styles.tab}
        level='2'>
        <View style={styles.tabHeader}>
          <Text category='h5'>{i18n.t('details.viewPager.detailedInfo.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
        <ScrollableTextArea title={i18n.t('details.viewPager.detailedInfo.description')} text={item.Description} />
        <View style={styles.row}>
          <Text style={[styles.boldText, { marginVertical: 20 }]}>{i18n.t('details.viewPager.detailedInfo.pilot')}</Text>
          <CheckBox checked={item.Pilot}></CheckBox>
        </View>
        <View style={styles.row}>
          <Text style={[styles.boldText, { marginBottom: 20 }]}>{i18n.t('details.viewPager.detailedInfo.repeatable')} </Text>
          <CheckBox checked={item.Repeatable}></CheckBox>
        </View>
        <Divider />
        <DetailText title={i18n.t('details.viewPager.detailedInfo.originForm')}  text={item.OriginForm} />
        <DetailText title={i18n.t('details.viewPager.detailedInfo.deviceCount')}  text={item.DeviceCount} />
        <ScrollableTextArea title={i18n.t('details.viewPager.detailedInfo.solutionPropose')}  text={item.SolutionPropose} />
        <DetailText title={i18n.t('details.viewPager.detailedInfo.creator')}  text={item.Creator} />
        <DetailText title={i18n.t('details.viewPager.detailedInfo.version')}  text={item.Version} />
        <DetailText title={i18n.t('details.viewPager.detailedInfo.createDate')}  text={item.CreateDate} />
        <DetailText title={i18n.t('details.viewPager.detailedInfo.capacity')}  text={item.Capacity} />
        <View style={styles.tabHeader}>
          <Text category='h5'>{i18n.t('details.viewPager.detailedInfo.name')} </Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
      </Layout>
  )
}
