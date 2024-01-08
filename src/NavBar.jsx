import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const NavLink = ({ to, title }) => {
  return (
    <Link to={to} style={styles.link}>
      <Text style={styles.text}>{title}</Text>
    </Link>
  );
};

const NavBar = () => {
    return (
        <View style={styles.container}>
            <NavLink to="/Entrenador" title="Entrenador" />
            <NavLink to="/Arbitro" title="Árbitro" />
            <NavLink to="/Jugadores" title="Jugadores" />
            <NavLink to="/Federacion" title="Federación" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 70,
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    link: {
        marginRight: 10,
    },
    text: {
        color: 'white',
    },
});

export default NavBar;

