import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M17 5H3"}],["path",{"d":"M21 12H8"}],["path",{"d":"M21 19H8"}],["path",{"d":"M3 12v7"}]];

const TextQuote = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TextQuote.displayName = 'TextQuote';

export default TextQuote;
