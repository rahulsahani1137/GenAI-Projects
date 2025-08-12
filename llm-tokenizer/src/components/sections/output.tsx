"use client";

import { useSelector } from "react-redux";
import { type RootState } from "@/context/store";
import OutputContainer from "@/components/ui/output-container";

export default function OutputResult() {
  const { tokenCount, text, tokens } = useSelector((state: RootState) => state.tokens);

  return (
    <div className='flex flex-col w-full'>
      <OutputContainer>
        <h1>Token Count</h1>
        <div>{tokenCount}</div>
      </OutputContainer>

      <OutputContainer>
        {text}
      </OutputContainer>

      <OutputContainer>
        {tokens.map((token, i) => (
          <span key={i}>{token}, </span>
        ))}
      </OutputContainer>
    </div>
  );
}
