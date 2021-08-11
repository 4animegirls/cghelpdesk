import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Divider } from '@ui-kitten/components';

export default class DetailText extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{backgroundColor: '#f59d51',borderRadius: 15,marginTop:24,marginHorizontal:8}}>
        <Text style={styles.boldText}>{this.props.title}:</Text>
        <Text style={styles.text}>
          {this.props.text === null ? "---" : this.props.text}
        </Text>
        {/* <Divider style={styles.divider} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    marginTop: 16,
    
  },
  boldText: {
    paddingVertical:4,
    paddingHorizontal: 8,
    fontWeight: '700',
    fontSize: 18,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: '#F58220',
  },
  text: {
    color:'black',
    fontSize: 18,
    marginHorizontal: 8,
    paddingVertical:4,

  },
  row: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
   
  }
});
