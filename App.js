import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native';

import Playslist from './src/shared/playlist'

export default class App extends React.Component {
  getMusicTemplate(music) {
    return (
      <Playslist
        music={music}
      />
    )
  }

  render() {
    var playlist = [{
      id: 1,
      title: 'Discover Weekly',
      imageCD: 'https://somosmusica.com.br/wp-content/uploads/2017/09/spotify-logo.png',
      resumo: 'Your weekly mixtape of fresh music ...'
    },
    {
      id: 2,
      title: 'Music 2',
      imageCD: 'http://idgnow.com.br/idgimages/imagefolder.2015-09-01.0890491863/Deezer-logo_625.jpg',
      resumo: 'Your weekly mixtape of fresh music ...'
    }]
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.titleHead}>Playlist</Text>
        </View>
      
        <FlatList
          data={playlist}
          renderItem={({ item }) => this.getMusicTemplate(item)}
          keyExtractor={(item, index) => item.id.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: 16,
  },

  header: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    width: "100%",
    paddingVertical: 10
    
},

titleHead: {
  fontSize: 18,
  fontWeight: 'bold',
  color: 'white',
  textAlign: 'center',
},

});
