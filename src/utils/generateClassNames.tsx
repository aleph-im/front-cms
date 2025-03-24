export type AllowedClassNames = {
  backgroundColor?: string;
  effects?: string;
};

export function generateClassNames({
  backgroundColor,
  effects,
}: AllowedClassNames) {
  return [backgroundColor, effects].filter(Boolean).join(" ");
}
