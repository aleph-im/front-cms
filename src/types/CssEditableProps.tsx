export type Breakpoint = {
  breakpoint: string;
  style: string;
  value: string;
};

export type CssEditableProps = {
  remStyleBreakpoints: Breakpoint[];
  margin: string;
  marginTop: string;
  marginBottom: string;
  marginRight: string;
  marginLeft: string;
  padding: string;
  paddingTop: string;
  paddingBottom: string;
  paddingRight: string;
  paddingLeft: string;
  direction: string;
  alignItems: string;
  wrap: string;
  gap: string;
  opacity: string;
};
