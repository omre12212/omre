import { StyleSheet, Text, View, Button, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'

const Test = () => {
  const [text, setText] = useState('');

  const [arr, setArr] = useState([]);

  const onPressButton = () => {
    if (text.trim() !== '') {
      setArr(prevArr => [...prevArr, text]);
      onChangeText('');
    }
  };

  const onPressAdd = () => {
    setArr(prevArr => [...prevArr, text]);
  };

  const onPressRemove = () => {
    if (arr.length > 0) {
      setArr(prevArr => prevArr.slice(0, prevArr.length - 1));
    }
  };

  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
      />
      <Button
        title="زر الاختبار"
        onPress={onPressButton}
      />
      <View style={styles.buttonsContainer}>
        <Button
          title="زاد"
          onPress={onPressAdd}
        />
        <Button
          title="ناقص"
          onPress={onPressRemove}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        {arr.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.boxText}>{item}</Text>
            <Text style={styles.plusMinus}>{index === arr.length - 1 ? '-' : '+'}</Text>
          </View>
        ))}
        <Text style={styles.scrollIndicator}>تمرير للأسفل</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    maxHeight: 200,
    width: '100%',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
    justifyContent: 'center',
  },
  boxText: {
    color: 'white',
  },
  plusMinus: {
    color: 'white',
    fontSize: 20,
    marginLeft: 5,
  },
  scrollIndicator: {
    textAlign: 'center',
    marginTop: 10,
    color: 'gray',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
});

export default Test;
