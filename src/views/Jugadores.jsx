import React from 'react'
import { Text, View } from 'react-native'
import JugadoresCard from './JugadoresCard'

const Jugadores = () => {
    console.log('Está mostrando la vista de jugador')
    return (
        <View style = {{marginTop: 30, flex: 1}}>
        {/* <Text style={{color: 'white', textAlign: 'center'}}>
                vista del Jugador
            </Text> */}
            <JugadoresCard />
        </View>
    )
}

export default Jugadores
