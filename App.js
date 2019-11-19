import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Header from './components/Header';
import ItemList from './components/ItemList';
    
export default class App extends React.Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        {/* タブナビゲーションをここに追加する */}
        <ItemList />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
  },
});
