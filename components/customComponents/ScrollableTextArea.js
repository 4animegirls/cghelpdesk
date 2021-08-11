import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Divider, Layout } from '@ui-kitten/components';

export default class ScrollableTextArea extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.block}>
        <Text style={styles.boldText}>{this.props.title}:</Text>
        <ScrollView style={{ height: 96, flexGrow: 0,backgroundColor: '#f59d51',borderRadius: 15,marginTop:8,marginHorizontal:2 }}>
          <Text style={styles.text}>
            {this.props.text === null ? "---" : this.props.text}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 8
  },
  block: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    marginHorizontal:8,
    paddingVertical: 4,
    paddingHorizontal:4,
    backgroundColor: '#F58220',
    marginTop: 24
  },
  boldText: {
    marginHorizontal: 8,
    marginTop: 4,
    fontWeight: '700',
    fontSize: 18
  },
  text: {
    fontSize: 18,
    marginHorizontal: 8,
    color: 'black'
  },
  row: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
