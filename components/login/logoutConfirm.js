import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { useDispatch } from 'react-redux'
import { logout } from '../../actions'
import i18n from 'i18n-js';

export default ({ visibility, changeVisibility}) => {
  const dispatch =  useDispatch()

  const goBack = () => {
    changeVisibility(false) 
  }

  const logoutFunc = () => {
    changeVisibility(false) 
    dispatch(logout())
  }

  return (
    <View >
      <Modal
        visible={visibility}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => goBack()}>
        <Card disabled={true} style = {{width: 200}} >    
          <Text style = {{margin: 5}}> {i18n.t('logout.prompt')}</Text>

          <Button status = 'warning' onPress={() => goBack()} style = {{margin: 5}}>
            {i18n.t('logout.no')} 
          </Button>
          <Button status = 'danger' onPress={() => logoutFunc()} style = {{margin: 5}}>
            {i18n.t('logout.yes')}
          </Button>

        </Card>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});