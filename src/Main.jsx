import React from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import NavBar from './NavBar';
import { NativeRouter, Routes, Route, Navigate } from 'react-router-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import Entrenador from './views/Entrenador';
import Arbitro from './views/Arbitro';
import Jugadores from './views/Jugadores';
import Federacion from './views/Federacion';
import JugadoresCard from './views/JugadoresCard';
import JugadorDetalle from './views/JugadorDetalle';
import {useState} from 'react'

const Main = () => {
    const { width, height } = Dimensions.get('window');
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);

    
    return (
        <NativeRouter>
            <View style={styles.container(width, height)}>
                <StatusBar style="light" />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Jugadores />} /> 
                    <Route path="/Entrenador" element={<Entrenador />} />
                    <Route path="/Arbitro" element={<Arbitro />} />
                    <Route path="/Jugador" element={<JugadorDetalle />} />
                    <Route path="/Federacion" element={<Federacion />} />
                    <Route path="/Jugadores" element={<JugadorDetalle setJugadorSeleccionado={setJugadorSeleccionado} />} />
                </Routes>              
            </View>
        </NativeRouter>
    );
};

const styles = StyleSheet.create({
    container: (width, height) => ({
        width,
        height,
        backgroundColor: 'black',
    }),
    bottomText: {
        marginTop: 90,
        textAlign: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    }
})

export default Main;



