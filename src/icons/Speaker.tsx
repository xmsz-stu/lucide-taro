import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"4","y":"2","rx":"2"}],["path",{"d":"M12 6h.01"}],["circle",{"cx":"12","cy":"14","r":"4"}],["path",{"d":"M12 14h.01"}]];

const Speaker = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Speaker.displayName = 'Speaker';

export default Speaker;
