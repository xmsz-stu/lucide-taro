import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"5","rx":"2"}],["rect",{"x":"16","y":"7","rx":"2"}],["path",{"d":"M12 2v20"}]];

const AlignHorizontalJustifyCenter = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AlignHorizontalJustifyCenter.displayName = 'AlignHorizontalJustifyCenter';

export default AlignHorizontalJustifyCenter;
