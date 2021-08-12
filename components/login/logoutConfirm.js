import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text, Divider } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import { logout } from '../../actions'

export default ({ visibility, changeVisibility}) => {
  const dispatch =  useDispatch()

  const goBack = () => {
    changeVisibility(false) 
  }

  const logoutFunc = () => {
    dispatch(logout())
  }

  return (
    <View >
      <Modal
        visible={visibility}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => goBack()}>
        <Card disabled={true} style = {{width: 200}} >
          <Text style = {{margin: 5}}>Are you Sure? </Text>

          <Button onPress={() => goBack()} style = {{margin: 5}}>
            Go back
          </Button>
          <Button status = 'warning' onPress={() => logoutFunc()} style = {{margin: 5}}>
            Log out
          </Button>
        </Card>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
});