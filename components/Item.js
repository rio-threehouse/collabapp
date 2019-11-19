import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Item extends React.Component {
  render() {
    const { tags, title, date, name_1, name_2, view, fav, isMyfav } = this.props;
    
    return (
      <View style={styles.item}>
        <View style={styles.itemPhoto}>
          <Image style={styles.photo_1} source={require ('../assets/photo/photoImage_1.png')}/>
          <Image style={styles.photo_2} source={require ('../assets/photo/photoImage_2.png')}/>
        </View>

        <Image style={styles.path} source={require ('../assets/icon/path.png')}/>

        <View style={styles.userName}>
          <View style={styles.nameWidth}>
            <Text style={styles.name}>{name_1}</Text>
          </View>
          <View style={styles.nameWidth}>
            <Text style={styles.name}>{name_2}</Text>
          </View>
        </View>

        <View style={styles.views}>
          <Image source={require ('../assets/icon/viewsPath.png')}/>
          <Text style={styles.view}>{view}</Text>
          {isMyfav === 'true' ? (
            <Image source={require ('../assets/icon/roundFavorite.png')}/>
          ):(
            <Image source={require ('../assets/icon/notroundFavorite.png')}/>
          )}
          <Text style={isMyfav === 'true' ? [styles.fav] : [styles.notFav]}>{fav}</Text>
        </View>
        
        <View style={styles.itemTitleBar}>
          <Image style={styles.titleIcon} source={require ('../assets/icon/music.png')}/>
          <Text style={styles.title}>{title}</Text>
          {tags.map((tag) => {
            return (<Text key={tag} style={styles.tag}>{tag}</Text>);
          })}
        </View>
        <Text style={styles.date}>{date}</Text>
      </View>
    );
  }
}
    
const styles = StyleSheet.create({
  item: {
    marginBottom: 16,
  },
  itemPhoto: {
    flexDirection: 'row', 
    marginBottom: 8,
  },
  path: {
    position: 'absolute',
    alignSelf: 'center',
    top: 55,
  },
  photo_1: {
    marginRight: 0.5,
    height: 150,
    flex: 1, 
  },
  photo_2: {
    marginLeft: 0.5,
    height: 150,
    flex: 1,
  },
  userName: {
    flexDirection: 'row', 
    alignItems: 'flex-end',
    height: 24,
    backgroundColor: 'rgba(213, 213, 213, 0.5)',
    position: 'absolute',
    top: 126,
  },
  nameWidth: {
    width: '50%',
  },
  name: {
    color: 'rgb(255, 255, 255)',
    marginLeft: 4,
  },
  views: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    top: 128,
  },
  view: {
    color: 'rgb(255, 255, 255)',
    marginRight: 6,
  },
  fav: {
    color: 'rgb(255, 121, 157)',
    marginRight: 6,
  },
  notFav: {
    color: 'rgb(255, 255, 255)',
    marginRight: 6,
  },
  itemTitleBar: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  title: { 
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 2,
    marginRight: 24,
  },
  titleIcon: {
    marginLeft: 8,
  },
  tag: {
    color: 'rgb(221, 166, 232)',
    backgroundColor: '#F8EDFA',
    paddingVertical: 4,
    paddingHorizontal: 8.5,
    marginRight: 5,
    borderRadius: 10,
    overflow: 'hidden',
  }, 
  date: {
    fontSize: 10,
    color: 'rgba(0, 0, 0, 0.26)',
    textAlign: 'right',
    marginRight: 8,
  }
});
