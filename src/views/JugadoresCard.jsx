import React, { useState } from 'react';
import { FlatList, Text, Image, Pressable, StyleSheet } from 'react-native';
import useJugadoresList from '../Hooks/useJugadoresList';
import JugadorDetalle from './JugadorDetalle';

const JugadoresCard = () => {
    const { jugadores, isLoading, error } = useJugadoresList();
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
    const [jugadoresListado, setJugadores] = useState(jugadoresListado);

    if (isLoading) {
        return <Text>Cargando jugadores...</Text>;
    }

    if (error) {
        return <Text>Error al cargar los jugadores: {error.message}</Text>;
    }

    const handlePress = (jugador) => {
        setJugadorSeleccionado(jugador);
    };

    const handleDelete = (jugadorID) => {
        const updatedJugadores = jugadores.filter((jugador) => jugador.id !== jugadorID);
        setJugadores(updatedJugadores);
    };

    return (
        <>
            {jugadorSeleccionado ? (
                <JugadorDetalle jugador={jugadorSeleccionado} />
            ) : (
                <FlatList
                    data={jugadores}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => handlePress(item)} style={styles.card}>
                            <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
                            <Text style={styles.title}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                            <Text style={styles.text}>ID: {item.login.username}</Text>
                            <Text style={styles.text}>URL: {item.email}</Text>
                            <Pressable onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
                                <Text style={styles.deleteButtonText}>🗑️</Text>
                            </Pressable>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.uuid}
                />
            )}
        </>
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
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        color: 'black',
        fontSize: 13,
    },
    deleteButton: {
        marginTop: 10,
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8
    },
    deleteButtonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default JugadoresCard;

