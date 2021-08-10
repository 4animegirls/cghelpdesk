import { Layout } from '@ui-kitten/components';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Divider } from 'react-native'

export class Table extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Layout>
          <Layout>textInComponent</Layout>
          <Layout>textInComponent</Layout>
        </Layout>
        <Layout></Layout>
        <Layout></Layout>
        <Layout>textInComponent</Layout>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  divider: {
    marginVertical: 16
  },
  boldText: {
    marginHorizontal: 8,
    marginTop: 24,
    fontWeight: '700',
    fontSize: 18
  },
  text: {
    fontSize: 18,
    marginHorizontal: 8
  },
  row: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Table;
