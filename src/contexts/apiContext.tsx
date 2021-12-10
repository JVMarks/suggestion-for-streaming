import React, { createContext, useState } from "react";
import { ApiData } from "../types/apiData";

const DEFAULT_VALUE = {
  apiState: {
    streamingPlatforms: [],
    recommendeMovies: [],
  },
  setApiState: () => {},
};

type PropsApiContext = {
  apiState: ApiData;
  setApiState: React.Dispatch<React.SetStateAction<ApiData>>;
};

const ApiContext = createContext<PropsApiContext>(DEFAULT_VALUE);

const ApiProvider: React.FC = ({ children }) => {
  const [apiState, setApiState] = useState<ApiData>(DEFAULT_VALUE.apiState);

  const value = {
    apiState,
    setApiState,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export { ApiProvider };
export default ApiContext;
