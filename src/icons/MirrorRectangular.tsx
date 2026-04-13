import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M11 6 8 9"}],["path",{"d":"m16 7-8 8"}],["rect",{"x":"4","y":"2","rx":"2"}]];

const MirrorRectangular = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

MirrorRectangular.displayName = 'MirrorRectangular';

export default MirrorRectangular;
