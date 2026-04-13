import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M14 4a1 1 0 0 1 1-1"}],["path",{"d":"M15 10a1 1 0 0 1-1-1"}],["path",{"d":"M21 4a1 1 0 0 0-1-1"}],["path",{"d":"M21 9a1 1 0 0 1-1 1"}],["path",{"d":"m3 7 3 3 3-3"}],["path",{"d":"M6 10V5a2 2 0 0 1 2-2h2"}],["rect",{"x":"3","y":"14","rx":"1"}]];

const Replace = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Replace.displayName = 'Replace';

export default Replace;
