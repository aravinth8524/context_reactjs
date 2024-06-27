import { createContext, useState } from "react";
import Data from "./component/Data";
export const usingContext = createContext();
export default function App() {
  const [data, setData] = useState();
  console.log(data);
  return (
    <usingContext.Provider value={{ data, setData }}>
      <Data />
    </usingContext.Provider>
  );
}
