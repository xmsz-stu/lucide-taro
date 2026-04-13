import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 12a9 9 0 1 1-6.219-8.56"}]];

const Loader2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Loader2.displayName = 'Loader2';

export default Loader2;
