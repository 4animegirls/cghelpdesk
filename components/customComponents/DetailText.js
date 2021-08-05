import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Divider } from '@ui-kitten/components';

class DetailText extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View>
        <Text style={styles.boldText}>{this.props.title}:</Text>
        <Text style={styles.text}>
          {this.props.text === null ? "---" : this.props.text}
        </Text>
        <Divider style={styles.divider} />
      </View>
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

export default DetailText;
