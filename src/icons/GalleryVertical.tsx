import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M3 2h18"}],["rect",{"x":"3","y":"6","rx":"2"}],["path",{"d":"M3 22h18"}]];

const GalleryVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GalleryVertical.displayName = 'GalleryVertical';

export default GalleryVertical;
