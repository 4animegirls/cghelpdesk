import React, { useState } from 'react';
import { Button, Icon, Modal, Card, Input, Select, IndexPath, SelectItem, Divider } from '@ui-kitten/components'
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import i18n from 'i18n-js';
import { v4 as uuidv4 } from 'uuid';
import { itemsAction } from '../../actions';

export default (props) => {
  const [visibility, setVisibility] = useState(false);
  const [value, setValue] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const dispatch = useDispatch();

  const data = [
    'Search by Name',
    'Search by Solver',
  ];

  const filterData = [
    'Name',
    'Solver',
  ]

  const displayValue = data[selectedIndex.row];


  const goBack = () => {
    setVisibility(false)
  }

  const renderOption = (title) => (
    <SelectItem title={title} key={uuidv4} />
  );

  return (
    <Button onPress={() => setVisibility(true)} appearance='ghost' size='tiny'>
      <Icon name='search' style={{ width: 20, height: 20 }} fill='#fff' />
      <View>
        <Modal
          visible={visibility}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => goBack()}>
          <Card status='warning' style={{ width: 200 }} >
            <Select
              selectedIndex={selectedIndex}
              onSelect={index => setSelectedIndex(index)}
              value={displayValue}
              style={{ padding: 5 }}>
              {data.map(renderOption)}
            </Select>
            <Input
              style={{ padding: 5 }}
              value={value}
              onChangeText={nextValue => setValue(nextValue)}
            />
            <Button status='warning' style={{ margin: 5 }} onPress={() => {
              dispatch(itemsAction(props.Token, 1, [filterData[selectedIndex.row], '"' + value + '"'])); goBack()
            }}>
              Search
            </Button>

          </Card>
        </Modal>
      </View>
    </Button>

  )
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});