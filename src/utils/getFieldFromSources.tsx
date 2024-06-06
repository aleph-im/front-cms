interface GetMetdataFieldArgs {
  sourcesByPriority: any[];
  keys: string[];
}

type GetMetdataFieldResponse = any | null;

export const getFieldFromSources = ({
  sourcesByPriority,
  keys,
}: GetMetdataFieldArgs): GetMetdataFieldResponse => {
  return sourcesByPriority?.reduce((result: any, source) => {
    if (result != null) return result;

    const value = keys.reduce((obj: any, key) => obj?.[key], source);
    return value != null ? value : result;
  }, null);
};
