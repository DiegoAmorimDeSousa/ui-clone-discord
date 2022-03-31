import React from 'react';

import { Container, HashTagIcon, Title, Separator, Description } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashTagIcon />
      <Title>chat-livre</Title>
      <Separator />
      <Description>Canal aberto para conversars</Description>
    </Container>
  )
}

export default ChannelInfo;