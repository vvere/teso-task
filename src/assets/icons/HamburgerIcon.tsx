import colors from 'themes/colors';
import { IconProps } from './types';

export const HamburgerIcon = ({ color = colors.white }: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 18H24V21H0V18ZM0 11H24V14H0V11ZM0 4H24V7H0V4Z"
      fill={color}
    />
  </svg>
);
