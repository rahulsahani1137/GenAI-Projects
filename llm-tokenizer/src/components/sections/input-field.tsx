"use client";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { setText } from "@/context/slice/tokenSlice";
import { type RootState } from "@/context/store";

export default function InputField() {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.tokens.text);

  return (
    <Textarea
      placeholder="Type your message here."
      className="min-h-64 max-h-1/2"
      value={value}
      onChange={(e) => dispatch(setText(e.target.value))}
    />
  );
}
