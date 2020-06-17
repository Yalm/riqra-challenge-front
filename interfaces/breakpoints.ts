export enum EnumBreakpoints {
  xs = 0,
  sm = '576px',
  md = '768px',
  lg = '992px',
  xl = '1200px'
}

export type Breakpoints = {
  [key in keyof typeof EnumBreakpoints]?:
    | number
    | string
    | {
        span: number;
        offset: number;
      };
};
