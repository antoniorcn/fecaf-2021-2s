import React from 'react';
import {Image, View} from 'react-native';
import petImage from './assets/pets.png';

export default () => { 
    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                flex: 1,
                }}>
                <Image 
                style={{
                    width: 400,
                    height: 250,
                }}
                source={petImage}
                ></Image>
            </View>

            <View style={{
                flex: 2,
                backgroundColor: "red"
            }}>

            </View>


        </View>
    );
}