import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Divider,Layout } from '@ui-kitten/components';

export default class ScrollableTextArea extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <>
        <Text style={styles.boldText}>{this.props.title}:</Text>
        <ScrollView style={{height: 96,flexGrow:0}}>
          <Text style={styles.text}>
            {this.props.text === null ? "---" : this.props.text}
          </Text>
        </ScrollView>
        <Divider style={styles.divider} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 8
  },
  boldText: {
    marginHorizontal: 8,
    marginTop: 10,
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
