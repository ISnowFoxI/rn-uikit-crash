import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const First = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={48}
        onPress={() => {
          navigation.navigate('second');
        }}>
        <Text>Go</Text>
      </Pressable>
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
