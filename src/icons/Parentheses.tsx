import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 21s-4-3-4-9 4-9 4-9"}],["path",{"d":"M16 3s4 3 4 9-4 9-4 9"}]];

const Parentheses = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Parentheses.displayName = 'Parentheses';

export default Parentheses;
