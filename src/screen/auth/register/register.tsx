import React, {useEffect, FC, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '~navigations/constant';

const Register: FC<StackScreenProps<NavigatorParamList, 'Register'>> = ({
  navigation,
}) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View>
      <TextInput placeholder="name" onChangeText={name => setName({name})} />
      <TextInput
        placeholder="email"
        onChangeText={email => setEmail({email})}
      />
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={password => setPassword({password})}
      />

      <Button onPress={() => {}} title="Sign Up" />
    </View>
  );
};

export default Register;
