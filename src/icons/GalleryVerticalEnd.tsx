import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M7 2h10"}],["path",{"d":"M5 6h14"}],["rect",{"x":"3","y":"10","rx":"2"}]];

const GalleryVerticalEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GalleryVerticalEnd.displayName = 'GalleryVerticalEnd';

export default GalleryVerticalEnd;
