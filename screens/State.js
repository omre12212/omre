import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const State = (props) => {
  
    const [qty, setqty] = useState(1);

    return (
        <View style={styles.qtyview}>
        <Pressable onPress={()=>setqty(qty + 1)}>
            <Text style={styles.qtytxt}>+</Text>
        </Pressable>

        <Text style={styles.qtytxt}>{qty}</Text>

        <Pressable onPress={()=>setqty(qty - 1)}>
            <Text style={styles.qtytxt}>-</Text>
        </Pressable>
    </View>
  )
}

export default State

const styles = StyleSheet.create({
    qtyview: {
        //  borderWidth: 1,
        width: '80%',
        alignself: 'center',
        alignitems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-around',},

        qtytxt: {
        fontSize: 45,
        color:'black'
        },
})