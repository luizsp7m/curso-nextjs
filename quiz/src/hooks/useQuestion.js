import { useContext } from "react";
import { QuestionContext } from "../context/QuestionContext";

export default function useQuestion() {
  const values = useContext(QuestionContext);
  return values;
}