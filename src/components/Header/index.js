

import { StyleSheet, Text, View, StatusBar } from 'react-native';


const statusBarHeight = StatusBar.currentHeight 
  ? StatusBar.currentHeight + 30
  : 70


export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Arouuu!</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
  }
})
