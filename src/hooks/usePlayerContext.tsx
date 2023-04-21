import { createContext, useContext } from "react";

export interface Player {
  username: string;
  answers: string[];
}

const PlayerContext = createContext<Player>({
  username: "",
  answers: [],
});

export const usePlayerContext = () => useContext(PlayerContext);
