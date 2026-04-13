import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m16 3 5 5"}],["path",{"d":"M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10"}],["path",{"d":"m21 3-5 5"}]];

const GlobeX = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GlobeX.displayName = 'GlobeX';

export default GlobeX;
