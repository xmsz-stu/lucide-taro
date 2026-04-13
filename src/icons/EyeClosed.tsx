import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m15 18-.722-3.25"}],["path",{"d":"M2 8a10.645 10.645 0 0 0 20 0"}],["path",{"d":"m20 15-1.726-2.05"}],["path",{"d":"m4 15 1.726-2.05"}],["path",{"d":"m9 18 .722-3.25"}]];

const EyeClosed = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

EyeClosed.displayName = 'EyeClosed';

export default EyeClosed;
