import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 7v10"}],["path",{"d":"M6 5v14"}],["rect",{"x":"10","y":"3","rx":"2"}]];

const GalleryHorizontalEnd = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GalleryHorizontalEnd.displayName = 'GalleryHorizontalEnd';

export default GalleryHorizontalEnd;
