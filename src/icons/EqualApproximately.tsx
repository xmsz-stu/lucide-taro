import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}],["path",{"d":"M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"}]];

const EqualApproximately = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

EqualApproximately.displayName = 'EqualApproximately';

export default EqualApproximately;
