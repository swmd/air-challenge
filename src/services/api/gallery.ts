import { get } from ".";

export const fetchBoards = () =>
  get("/boards/c74bbbc8-602b-4c88-be71-9e21b36b0514");

export const fetchAssets = () => get("/clips/search");
