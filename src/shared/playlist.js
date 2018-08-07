import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Playlist extends React.Component {
    render() {
        var music = this.props.music;
        console.log(music)
        return (
            <View style={styles.container}>

                <View style={styles.playlist}>
                    <Image
                        resizeMode={"cover"}
                        style={styles.imageCD}
                        source={{ uri: music.imageCD}}
                    />

                    <Text style={styles.titulo}>
                        {music.title}
                    </Text>

                    <Text style={styles.descricao}>
                        {music.resumo}
                    </Text>

                </View>
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

    playlist: {
        paddingTop: 20,
        
    },

    imageCD: {
        width: 200,
        height: 200,
    },

    titulo: {
        color: 'white',
        paddingTop: 10,
        fontSize: 18,
        fontWeight: 'bold',

    },

    descricao: {
        color: 'white',
        paddingTop: 10,
        fontSize: 12,
    }


});
