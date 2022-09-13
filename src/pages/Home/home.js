import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, LinearGradient } from 'react-native';

export default function Homepage() {
    const image = require('../../../assets/logo-brasileirão.png');

    //const onPressRound = () =>  }


    return (
        <View>
            <LinearGradient style={style.linearGradient} start={[0.4, 1.5]} end={[0, 0]} colors={['#008000', 'transparent']} />
            <Image source={image} resizeMode='center' style={{ width: 400, heigh: 400 }} />
            <TouchableOpacity >
                <Text style={style.textButton}>
                    Rodada atual
                </Text>
            </TouchableOpacity>

        </View>
    )

}

const style = StyleSheet.create({
    linearGradient: {
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    textButton: {
        color: 'rgb( 128, 128, 128,)',
        fontsize: 20
    }
})