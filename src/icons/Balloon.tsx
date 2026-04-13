import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1"}],["path",{"d":"M12 6a2 2 0 0 1 2 2"}],["path",{"d":"M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0"}]];

const Balloon = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Balloon.displayName = 'Balloon';

export default Balloon;
