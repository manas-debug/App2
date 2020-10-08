import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Home = () => {
    return(
        <View style={styles.header}>
            <Text>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        color : '#fff',
        elevation : 10,
    },
})

export default Home;