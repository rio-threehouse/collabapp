import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
    
export default class Header extends React.Component {
  render () {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ホーム</Text>
        <View style={styles.headerIcon}>
          <Image style={{marginRight: 12}} source={require ('../assets/icon/filter.png')}/>
          <Image style={{marginRight: 17}} source={require ('../assets/icon/icNotifications.png')}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 24,
    marginTop: 12,
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  headerIcon : {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
  },
});
