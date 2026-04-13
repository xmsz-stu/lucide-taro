import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M4 21h1"}],["path",{"d":"M9 21h1"}],["path",{"d":"M14 21h1"}],["path",{"d":"M19 21h1"}]];

const GalleryThumbnails = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

GalleryThumbnails.displayName = 'GalleryThumbnails';

export default GalleryThumbnails;
