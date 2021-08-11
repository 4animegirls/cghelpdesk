import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Divider } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import { logout } from '../../actions'

export default ({ navigation }) => {
  const dispatch =  useDispatch()
  const [visible, setVisible] = React.useState(true);

  const goBack = () => {
    setVisible(false) 
  }

  const logoutFunc = () => {
    dispatch(logout())

  }

  useEffect(() => {
    {navigation.navigate('Home')}
  })

  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => goBack()}>
        <Card disabled={true}>
          <Text>Are you Sure? </Text>
          <Divider />
          <Button onPress={() => goBack()}>
            Go back
          </Button>
          <Divider />
          <Button status = 'warning' onPress={() => logoutFunc()}>
            Log out
          </Button>
        </Card>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});