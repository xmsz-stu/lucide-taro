import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}],["path",{"d":"M7 22h1a4 4 0 0 0 4-4v-1"}],["path",{"d":"M7 2h1a4 4 0 0 1 4 4v1"}]];

const TextCursor = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TextCursor.displayName = 'TextCursor';

export default TextCursor;
