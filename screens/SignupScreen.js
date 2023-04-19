import React from 'react'
import {
  TextInput,
  Button,
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
// import Theme from "../components/darktheme";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Text
          style={{
            color: '#032CF9',
            fontSize: 32,
            fontFamily: 'serif',
            fontWeight: 'bold',
          }}
        >
          Login
        </Text>
        {/* <Theme/> */}
        <View style={{ display: 'flex', width: '80%' }}>
          <TextInput
            style={styles.input}
            placeholder="Email Address/Mobile"
            // onChangeText={onChangeText}
            // value={text}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            // onChangeText={onChangeText}
            // value={text}
          />

          <View
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              width: '100%',
              paddingRight: 10,
            }}
          >
            <Text
              onPress={() => {
                navigation.navigate('Login')
              }}
            >
              Forgot Password?
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderTopLeftRadius: 250,
          borderTopRightRadius: 250,
          backgroundColor: '#0089e3',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            style={{ height: 300, bottom: '20%' }}
            source={require('../assets/lady.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  input: {
    width: 'auto',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
})
