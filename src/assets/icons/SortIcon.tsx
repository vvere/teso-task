import colors from 'themes/colors';
import { IconProps } from './types';

export const SortIcon = ({ color = colors.white }: IconProps) => (
  <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4 14.5L0 9.5L8 9.5L4 14.5Z" fill={color} />
    <path fillRule="evenodd" clipRule="evenodd" d="M4 0.5L0 5.5L8 5.5L4 0.5Z" fill={color} />
  </svg>
);
