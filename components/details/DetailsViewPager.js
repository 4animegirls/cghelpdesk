import React, { useState } from 'react';
import ScrollableTextArea from '../customComponents/ScrollableTextArea';
import { Input } from '@ui-kitten/components';
import Table from '../customComponents/Table';
import { Layout, Text, Divider, ViewPager, Icon, CheckBox, Button } from '@ui-kitten/components';
import { View } from 'react-native';
import i18n from 'i18n-js';
import DetailText from '../customComponents/DetailText';

export default ({ styles, item}) => {
  const [selectedIndex, setSelectedIndex] = useState('')
  return (
    <ViewPager
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
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
    </ViewPager>)
}