import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 10v3"}],["path",{"d":"M6 6v11"}],["path",{"d":"M10 3v18"}],["path",{"d":"M14 8v7"}],["path",{"d":"M18 5v13"}],["path",{"d":"M22 10v3"}]];

const AudioLines = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

AudioLines.displayName = 'AudioLines';

export default AudioLines;
