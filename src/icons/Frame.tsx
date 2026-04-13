import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["line",{}],["line",{}],["line",{}],["line",{}]];

const Frame = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Frame.displayName = 'Frame';

export default Frame;
