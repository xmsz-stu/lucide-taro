import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"6","rx":"2"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M17 12h.01"}],["path",{"d":"M7 12h.01"}]];

const RectangleEllipsis = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

RectangleEllipsis.displayName = 'RectangleEllipsis';

export default RectangleEllipsis;
