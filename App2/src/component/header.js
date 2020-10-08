import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Home = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.headertext}>To Dos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        height : 55,
        backgroundColor: '#fff',
        elevation : 10,
        padding : 14,
    },
    headertext : {
        textAlign: 'center',
        fontSize: 20,
    },
})

export default Home;