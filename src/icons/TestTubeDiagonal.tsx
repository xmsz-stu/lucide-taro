import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["path",{"d":"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"}],["path",{"d":"m16 2 6 6"}],["path",{"d":"M12 16H4"}]];

const TestTubeDiagonal = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

TestTubeDiagonal.displayName = 'TestTubeDiagonal';

export default TestTubeDiagonal;
