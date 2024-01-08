import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

const JugadorDetalle = ({ jugador, setJugadorSeleccionado }) => {
    const fechaNacimiento = new Date(jugador.dob.date).toLocaleDateString('en-GB');

    const handleBackToJugadores = () => {
        setJugadorSeleccionado(null);
        // <NativeRouter>
        //     <Routes>
        //         <Route path="/Jugadores" element={<Jugadores />}></Route>
        //     </Routes>
        // </NativeRouter>
    };

    return (
        <View style={styles.card}>
            <View style={styles.card}>
                <Image source={{ uri: jugador.picture.thumbnail }} style={styles.image} />
                <Text style={styles.title}>{`${jugador.name.title} ${jugador.name.first} ${jugador.name.last}`}</Text>
                <Text style={styles.text}>Género: {jugador.gender}</Text>
                <Text style={styles.text}>Edad: {jugador.dob.age}</Text>
                <Text style={styles.text}>Fecha de nacimiento: {fechaNacimiento}</Text>
                <Text style={styles.text}>ID: {jugador.id.value}</Text>
                <Text style={styles.text}>Email: {jugador.email}</Text>
            </View>
            <Pressable onPress={handleBackToJugadores} style={styles.backButton}>
                <Text style={styles.backButtonText}>Volver a Jugadores</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        marginVertical: 10,
        marginHorizontal: 15,
        padding: 10,
        borderRadius: 25,
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 25,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
        alignSelf: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    text: {
        color: 'black',
        fontSize: 13,
        marginTop: 10
    },
});

export default JugadorDetalle;
