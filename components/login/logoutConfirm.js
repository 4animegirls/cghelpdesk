import { Alert } from 'react-native';

export default () => {
  return Alert.alert(
    "Are your sure?",
    [
      // The "Yes" button
      {
        text: "Yes",
        onPress: () => {
          return true;
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: "No",
        onPress: () => false
      },
    ]
  );
};