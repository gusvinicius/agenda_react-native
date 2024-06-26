import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './style';

export default function InputType2({state, setState}){
    [number, setNumber] = useState('');

    function numberMask(input){
        const numberPure = input.replace(/\D/g, '');
        setNumber(numberPure)

        const numberMasked = numberPure.replace(/(\d{0,2})(\d{0,5})(\d{0,4})/,
        function(_, countryCode, prefix, suffix) {
            let result = '';
            if (countryCode) result += countryCode;
            if (prefix) result += (countryCode && countryCode.length === 2 ? ' ' : '') + prefix;
            if (suffix) result += (prefix && prefix.length === 5 ? '-' : '') + suffix;
            return result;
        })

        setState(numberMasked)

    }

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='EX: 83 98808-2293'
            selectionColor="#000000"
            onChangeText={numberMask}
            value={state}
            keyboardType='numeric'
            maxLength={13}
            />

            <Text style={styles.cont}>{number.length}/11</Text>
        </View>
    )
}