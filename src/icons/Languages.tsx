import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"m5 8 6 6"}],["path",{"d":"m4 14 6-6 2-3"}],["path",{"d":"M2 5h12"}],["path",{"d":"M7 2h1"}],["path",{"d":"m22 22-5-10-5 10"}],["path",{"d":"M14 18h6"}]];

const Languages = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

Languages.displayName = 'Languages';

export default Languages;
