import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Second = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable
        hitSlop={48}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
