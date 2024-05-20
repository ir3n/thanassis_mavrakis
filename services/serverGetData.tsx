// only use this in SERVER components
import { promises as fs } from "fs";
import path from "path";

export const serverGetData = async (fileName: string) => {
  try {
    const filePath = path.join(process.cwd(), "data", `${fileName}.json`);
    const file = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.error(`Error reading file ${fileName}:`, error);
    throw new Error(`Failed to read data from ${fileName}.json`);
  }
};
