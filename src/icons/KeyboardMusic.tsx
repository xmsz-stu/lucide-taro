import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"2","y":"4","rx":"2"}],["path",{"d":"M6 8h4"}],["path",{"d":"M14 8h.01"}],["path",{"d":"M18 8h.01"}],["path",{"d":"M2 12h20"}],["path",{"d":"M6 12v4"}],["path",{"d":"M10 12v4"}],["path",{"d":"M14 12v4"}],["path",{"d":"M18 12v4"}]];

const KeyboardMusic = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

KeyboardMusic.displayName = 'KeyboardMusic';

export default KeyboardMusic;
