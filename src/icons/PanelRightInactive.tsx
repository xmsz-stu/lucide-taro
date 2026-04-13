import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M15 14v1"}],["path",{"d":"M15 19v2"}],["path",{"d":"M15 3v2"}],["path",{"d":"M15 9v1"}]];

const PanelRightInactive = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelRightInactive.displayName = 'PanelRightInactive';

export default PanelRightInactive;
