import { useContext } from "react";
import { usingContext } from "../App";

export default function DataShow() {
  const { data } = useContext(usingContext);
  return (
    <div>
      <h1>{data?.email}</h1>
      <h1>{data?.password}</h1>
    </div>
  );
}
