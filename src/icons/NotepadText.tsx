import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M8 2v4"}],["path",{"d":"M12 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"x":"4","y":"4","rx":"2"}],["path",{"d":"M8 10h6"}],["path",{"d":"M8 14h8"}],["path",{"d":"M8 18h5"}]];

const NotepadText = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

NotepadText.displayName = 'NotepadText';

export default NotepadText;
