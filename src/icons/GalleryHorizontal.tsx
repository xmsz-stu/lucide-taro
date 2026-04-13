import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 3v18"}],["rect",{"x":"6","y":"3","rx":"2"}],["path",{"d":"M22 3v18"}]];

const GalleryHorizontal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GalleryHorizontal.displayName = 'GalleryHorizontal';

export default GalleryHorizontal;
