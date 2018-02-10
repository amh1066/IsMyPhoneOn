import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert } from 'react-native';

export default class App extends React.Component {
  _onPressButton() {
    Alert.alert('Your Phone is On.')
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      
      <View style={styles.container}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Yes.</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => this._onPressButton()}
            title="Continue"
          />
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
