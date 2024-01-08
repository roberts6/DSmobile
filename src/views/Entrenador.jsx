import React from 'react'
import { Text, View } from 'react-native'

const Entrenador = () => {
    console.log('Está mostrando la vista de Entrenador')
    return (
        <View style = {{marginTop: 30}}>
            <Text style={{color: 'white', textAlign: 'center'}}>
                vista del entrenador
            </Text>
        </View>
    )
}

export default Entrenador
