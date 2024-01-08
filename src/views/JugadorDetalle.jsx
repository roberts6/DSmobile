import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const JugadorDetalle = ({ route }) => {
  const { jugador } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: jugador.avatar_url }} style={styles.image} />
      <Text style={styles.title}>{jugador.login}</Text>
      <Text style={styles.detail}>ID: {jugador.id.toString()}</Text>
      <Text style={styles.detail}>Perfil URL: {jugador.html_url}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default JugadorDetalle;