import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 13V7"}],["path",{"d":"M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"}],["path",{"d":"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"}],["path",{"d":"m9 10 3-3 3 3"}],["path",{"d":"m9 5 3-3 3 3"}]];

const BookUp2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

BookUp2.displayName = 'BookUp2';

export default BookUp2;
