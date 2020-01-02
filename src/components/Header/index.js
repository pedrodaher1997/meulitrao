import React from 'react';
import {Container, Text, Button} from './styles';

import Icon from 'react-native-vector-icons/AntDesign';

export default function Header({handleNew}) {
  return (
    <Container>
      <Text>Meu Litrão</Text>
      <Button onPress={handleNew}>
        <Icon name="plus" color="#333" size={20} />
      </Button>
    </Container>
  );
}
