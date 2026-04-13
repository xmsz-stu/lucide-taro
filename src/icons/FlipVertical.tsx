import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"}],["path",{"d":"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"}],["path",{"d":"M4 12H2"}],["path",{"d":"M10 12H8"}],["path",{"d":"M16 12h-2"}],["path",{"d":"M22 12h-2"}]];

const FlipVertical = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

FlipVertical.displayName = 'FlipVertical';

export default FlipVertical;
