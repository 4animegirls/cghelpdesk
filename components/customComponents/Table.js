import { Layout } from '@ui-kitten/components';
import React, { Component } from 'react'
import { StyleSheet, Text, View, Divider, Button, ScrollView } from 'react-native'

export class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { header, item } = this.props;
    const hardcoded = [
      // [<Text style={styles.text}>Historia_bad.png</Text>, <Text style={styles.text}>image/png</Text>, <Button>Otvoriť</Button>, <Button>Zmazať</Button>, <Button>Zmeniť</Button>, <Text style={styles.text}>CORA GEO</Text>], [<Text style={styles.text}>Navrh__historia.jpg</Text>, <Text style={styles.text}>image/JPG</Text>, <Button>Otvoriť</Button>, <Button>Zmazať</Button>, <Button>Zmeniť</Button>, <Text style={styles.text}>CORA GEO</Text>]
    ];


    return (
      <View style={{ marginVertical: 16 }}>
          {header}
        {hardcoded.map((item) => {
          return (
            <View style={styles.row} key={hardcoded.indexOf(item) + 1}>
              {item.map((i) => (<View key={item.indexOf(i)}>{i}</View>))}
            </View>
          )
        })}
        <View key={hardcoded.length + 1}><Text style={[styles.text, { textAlign: 'left', marginHorizontal: 8 }]}>1</Text></View>
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
    color: 'white',
    fontSize: 10
  },
  row: {
    marginHorizontal: 8,
    display: 'flex',
    marginTop: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollrow: {
    width: '100%',
    marginTop: 2,
    flexDirection: 'row',
  }
});

export default Table;
