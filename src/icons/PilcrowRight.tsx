import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M10 3v11"}],["path",{"d":"M10 9H7a1 1 0 0 1 0-6h8"}],["path",{"d":"M14 3v11"}],["path",{"d":"m18 14 4 4H2"}],["path",{"d":"m22 18-4 4"}]];

const PilcrowRight = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PilcrowRight.displayName = 'PilcrowRight';

export default PilcrowRight;
