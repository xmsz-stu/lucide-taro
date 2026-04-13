import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{"x":"13","y":"13","rx":"2"}]];

const Workflow = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Workflow.displayName = 'Workflow';

export default Workflow;
