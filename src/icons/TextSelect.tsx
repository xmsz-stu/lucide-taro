import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M14 21h1"}],["path",{"d":"M14 3h1"}],["path",{"d":"M19 3a2 2 0 0 1 2 2"}],["path",{"d":"M21 14v1"}],["path",{"d":"M21 19a2 2 0 0 1-2 2"}],["path",{"d":"M21 9v1"}],["path",{"d":"M3 14v1"}],["path",{"d":"M3 9v1"}],["path",{"d":"M5 21a2 2 0 0 1-2-2"}],["path",{"d":"M5 3a2 2 0 0 0-2 2"}],["path",{"d":"M7 12h10"}],["path",{"d":"M7 16h6"}],["path",{"d":"M7 8h8"}],["path",{"d":"M9 21h1"}],["path",{"d":"M9 3h1"}]];

const TextSelect = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TextSelect.displayName = 'TextSelect';

export default TextSelect;
