import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
 
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if(div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Diego Sousa'
          date='31/03/2022'
          content='Hoje é meu aniversário'
        />
        <ChannelMessage 
          author='Música'
          date='31/03/2022'
          content={
            <>
              <Mention>@Diego Sousa</Mention>, música iniciada
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData;