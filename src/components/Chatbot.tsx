import config from '../config.js';
import MessageParser from '../MessageParser.js';
import ActionProvider from '../ActionProvider.js';
import React from 'react';
import Chatbot from 'react-chatbot-kit';

const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default Chatbot