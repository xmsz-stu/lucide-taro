import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M16 10h2"}],["path",{"d":"M16 14h2"}],["path",{"d":"M6.17 15a3 3 0 0 1 5.66 0"}],["circle",{"cx":"9","cy":"11","r":"2"}],["rect",{"x":"2","y":"5","rx":"2"}]];

const IdCard = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

IdCard.displayName = 'IdCard';

export default IdCard;
