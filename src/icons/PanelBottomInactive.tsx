import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = [["rect",{"x":"3","y":"3","rx":"2"}],["path",{"d":"M14 15h1"}],["path",{"d":"M19 15h2"}],["path",{"d":"M3 15h2"}],["path",{"d":"M9 15h1"}]];

const PanelBottomInactive = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

PanelBottomInactive.displayName = 'PanelBottomInactive';

export default PanelBottomInactive;
