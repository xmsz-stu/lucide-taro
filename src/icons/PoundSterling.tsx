import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M18 7c0-5.333-8-5.333-8 0"}],["path",{"d":"M10 7v14"}],["path",{"d":"M6 21h12"}],["path",{"d":"M6 13h10"}]];

const PoundSterling = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PoundSterling.displayName = 'PoundSterling';

export default PoundSterling;
