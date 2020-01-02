import React from 'react';
import {Container, Text, Button} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

export default function ListItem({order, handleOrder}) {
  return (
    <Container onPress={handleOrder}>
      <Text>{order.name}</Text>
    </Container>
  );
}
