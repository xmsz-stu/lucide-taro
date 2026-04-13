import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M15 4 5 9"}],["path",{"d":"m15 8.5-10 5"}],["path",{"d":"M18 12a9 9 0 0 1-9 9V3"}]];

const TurkishLira = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TurkishLira.displayName = 'TurkishLira';

export default TurkishLira;
