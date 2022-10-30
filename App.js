import React, { useRef } from 'react';
import { Animated, Text, View, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native';

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current; 
  const height = useRef(new Animated.Value(0)).current; 

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: false
    }).start();

    Animated.spring(height, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: false
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(height, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: 1,
            width: width
          },
        ]}>
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View> */}

      <View>
        <Animated.View  style={[styles.fadingContainer, {opacity: 1, height: height}]}>
          <View style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', height: '100%'}}>
            <Text>this is option</Text>
          </View>
        </Animated.View>
      </View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50
  },
  fadingContainer: {
    width: '100%',
    backgroundColor: 'powderblue',
    borderRadius: 8
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default App;