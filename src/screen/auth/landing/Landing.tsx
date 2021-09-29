import React, {useEffect, FC} from 'react';
import {Text, View, Button, SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {NavigatorParamList} from '~navigations/constant';

const Landing: FC<StackScreenProps<NavigatorParamList, 'Landing'>> = ({
  navigation,
}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default Landing;
