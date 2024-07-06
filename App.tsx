import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainNavigation from './routes/nav'

const App = () => {
  return (
    <View style={styles.container}>
      <MainNavigation />
    </View>
  )
}
//يصهزص


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
