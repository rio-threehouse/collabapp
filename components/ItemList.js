import React from 'react';
import { FlatList } from 'react-native';

import Item from './Item';
import DATA from '../items.json';

export default class ItemList extends React.Component {
  render () {
    return (
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} 
                                        tags={item.tags} 
                                        date={item.date}
                                        name_1={item.name_1}
                                        name_2={item.name_2}
                                        view={item.view}
                                        fav={item.fav}
                                        isMyfav={item.isMyfav}
                                        />}
        keyExtractor={item => item.id}
      />
    );
  }
}
