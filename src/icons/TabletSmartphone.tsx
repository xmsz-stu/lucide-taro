import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"8","rx":"2"}],["path",{"d":"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"}],["path",{"d":"M8 18h.01"}]];

const TabletSmartphone = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TabletSmartphone.displayName = 'TabletSmartphone';

export default TabletSmartphone;
