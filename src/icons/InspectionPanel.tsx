import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7 7h.01"}],["path",{"d":"M17 7h.01"}],["path",{"d":"M7 17h.01"}],["path",{"d":"M17 17h.01"}]];

const InspectionPanel = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

InspectionPanel.displayName = 'InspectionPanel';

export default InspectionPanel;
