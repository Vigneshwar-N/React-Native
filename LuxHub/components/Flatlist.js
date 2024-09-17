import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {styles} from './ListStyling';

export default function List({data}) {
  const {id, product_category, brand, model, condition, price, image} = data;

  return (
    <View style={styles.container}>
      <View style={[styles.itemWrapper, {height: 350}]}>
        <View style={styles.itemContent}>
          <Image style={[styles.image, {height: 240}]} source={image} />
          <View style={styles.textContainer}>
            <View style={styles.brandContainer}>
              <Text>{brand}</Text>
              <Image source={require('../assets/heart.png')} />
            </View>
            <View style={styles.conditionContainer}>
              <Text>{condition}</Text>
            </View>
            <View style={styles.categoryModelContainer}>
              <TouchableOpacity style={styles.categoryButton}>
                <Text style={styles.buttonText}>{product_category}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modelButton}>
                <Text style={styles.buttonText}>{model}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>{price}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
