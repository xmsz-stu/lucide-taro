import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 10h6V4"}],["path",{"d":"m2 4 6 6"}],["path",{"d":"M21 10V7a2 2 0 0 0-2-2h-7"}],["path",{"d":"M3 14v2a2 2 0 0 0 2 2h3"}],["rect",{"x":"12","y":"14","rx":"1"}]];

const PictureInPicture = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PictureInPicture.displayName = 'PictureInPicture';

export default PictureInPicture;
