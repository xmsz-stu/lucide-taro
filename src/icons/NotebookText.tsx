import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M2 6h4"}],["path",{"d":"M2 10h4"}],["path",{"d":"M2 14h4"}],["path",{"d":"M2 18h4"}],["rect",{"x":"4","y":"2","rx":"2"}],["path",{"d":"M9.5 8h5"}],["path",{"d":"M9.5 12H16"}],["path",{"d":"M9.5 16H14"}]];

const NotebookText = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

NotebookText.displayName = 'NotebookText';

export default NotebookText;
