import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 22h8"}],["path",{"d":"M12 11v11"}],["path",{"d":"m19 3-7 8-7-8Z"}]];

const Martini = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Martini.displayName = 'Martini';

export default Martini;
