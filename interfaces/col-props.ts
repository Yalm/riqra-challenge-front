import { HTMLAttributes } from 'react';
import { Breakpoints } from './breakpoints';

export interface ColProps extends HTMLAttributes<HTMLDivElement>, Breakpoints {
  span?: number | string;
  offset?: number | string;
  pull?: number | string;
  push?: number | string;
}
