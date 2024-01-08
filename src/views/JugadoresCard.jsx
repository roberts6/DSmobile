import React, { useState, useEffect } from 'react';
import { FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import useJugadoresList from '../Hooks/useJugadoresList';

const JugadoresCard = () => {
    const { jugadores, isLoading, error } = useJugadoresList();

    if (isLoading) {
        return (
            <Text>Cargando jugadores...</Text>
        );
    }

    if (error) {
        return (
            <Text>Error al cargar los jugadores: {error.message}</Text>
        );
    }

    return (
        <>
            <FlatList
                data={jugadores}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { }} style={styles.card}>
                        <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
                        <Text style={styles.title}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
                        <Text style={styles.text}>ID: {item.login.username}</Text>
                        <Text style={styles.text}>URL: {item.email}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.uuid}
            />
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
        flex: 1
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
        color: 'black'
    },
    text: {
        color: 'black',
        fontSize: 13,
    }
});

export default JugadoresCard;