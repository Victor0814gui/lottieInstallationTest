import {View, StyleSheet} from 'react-native';

import LottieView from 'lottie-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        resizeMode="contain"
        source={'LottieAnimation'}
        style={styles.animation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animation: {
    height: 600,
    width: 600,
  },
});
