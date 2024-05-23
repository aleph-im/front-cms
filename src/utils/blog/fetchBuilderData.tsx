import { GetContentOptions, builder } from "@builder.io/sdk";
import crypto from "crypto";

const fetchPromises: Record<string, Promise<any>> = {};

const createKeyFromArgs = (...args: any[]): string => {
  return crypto.createHash("md5").update(JSON.stringify(args)).digest("hex");
};

export const fetchBuilderData = async (
  requestType: "getAll" | "get",
  requestArgs: [string, GetContentOptions]
): Promise<any> => {
  const requestKey = createKeyFromArgs(requestType, ...requestArgs);

  if (!fetchPromises[requestKey]) {
    fetchPromises[requestKey] = (async () => {
      try {
        return await builder[requestType](...requestArgs);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        throw error;
      }
    })();
  }

  try {
    return await fetchPromises[requestKey];
  } finally {
    delete fetchPromises[requestKey];
  }
};
