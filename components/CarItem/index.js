import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {
  const { name, tagline, taglineCTA, image } = props;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="secondary"
          content="Custom Order"
          onPress={() => {}}
        />
        <StyledButton
          type="primary"
          content="Existing Inventory"
          onPress={() => {}}
        />
      </View>
    </View>
  );
};
export default CarItem;
