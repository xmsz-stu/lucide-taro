import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M9 2v6"}],["path",{"d":"M15 2v6"}],["path",{"d":"M12 17v5"}],["path",{"d":"M5 8h14"}],["path",{"d":"M6 11V8h12v3a6 6 0 1 1-12 0Z"}]];

const Plug2 = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Plug2.displayName = 'Plug2';

export default Plug2;
