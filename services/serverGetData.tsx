// only use this in SERVER components
import { promises as fs } from "fs";

export const serverGetData = async (fileName: string) => {
  const file = await fs.readFile(
    `${process.cwd()}/data/${fileName}.json`,
    "utf8"
  );
  const data = JSON.parse(file);

  return data;
};
