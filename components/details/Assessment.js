import React from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Layout, Text, Icon } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default function Assessment({ styles, item }) {
  return (
    <Layout
        style={styles.tab}
        level='2'>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.assessment.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
        <ScrollableTextArea title={i18n.t('details.viewPager.assessment.description')} text={item.Description} />
        <DetailText title={i18n.t('details.viewPager.assessment.neededIn')} text={""} />
        <DetailText title={i18n.t('details.viewPager.assessment.reviewDueDate')} text={item.ReviewDueDate} />
        <DetailText title={i18n.t('details.viewPager.assessment.version')} text={item.Version} />

        <DetailText title={i18n.t('details.viewPager.assessment.solvingPriority')} text={item.SolvingPriority} />
        <DetailText title={i18n.t('details.viewPager.assessment.requestCategory')} text={item.RequestCategory} />
        <DetailText title={i18n.t('details.viewPager.assessment.solvingForm')} text={item.SolvingForm} />
        <DetailText title={i18n.t('details.viewPager.assessment.capacity')} text={item.Capacity} /><Text>hod. (resp. osôb na deň v prípade položky SZ - školenie)</Text>
        <DetailText title={i18n.t('details.viewPager.assessment.analyzingCapacity')} text={item.AnalyzingCapacity} />
        <DetailText title={i18n.t('details.viewPager.assessment.programmingCapacity')} text={item.ProgrammingCapacity} />
        <Text>Kapacita analýza:8 hod. TBD</Text>
        <Text>Kapacita programovania:32 hod. TBD</Text>
        <View style={styles.tabHeader}>
          <Icon name="arrow-left-outline" fill="white" style={{ width: 40, height: 40 }} />
          <Text category='h5'>{i18n.t('details.viewPager.assessment.name')}</Text>
          <Icon name="arrow-right-outline" fill="white" style={{ width: 40, height: 40 }} />
        </View>
      </Layout>
  )
}
