import { useState } from 'react';
import OutputContainer from '../ui/output-container';
import Highlighter from "react-highlight-words";
import { Tiktoken } from 'js-tiktoken/lite';
import o200k_base from 'js-tiktoken/ranks/o200k_base';

const OutputResult = () => {
  const [tokenCount, setTokenCount] = useState(0)

  const enc = new Tiktoken(o200k_base);

  const userQuery = 'Hey There, I am Piyush Garg';
  const tokens = enc.encode(userQuery);

  console.log({ tokens });


  return (
    <div className='flex flex-col w-full'>
      <OutputContainer>
        <h1>Token Count</h1>
        <div>{tokenCount}</div>
      </OutputContainer>

      <OutputContainer>
        {userQuery}
      </OutputContainer>

      <OutputContainer>
        {tokens}
      </OutputContainer>
    </div>
  )
}

export default OutputResult