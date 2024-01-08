import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const NavLink = ({ to, title }) => {
  return (
    <Link to={to} style={styles.linkStyle}>
      <Text style={styles.textStyle}>{title}</Text>
    </Link>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    padding: 15,
  },
  textStyle: {
    color: 'white',
  },
});

export default NavLink;
