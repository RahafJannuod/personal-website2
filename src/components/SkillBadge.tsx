import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode, color: string }> = ({ children, color }) => (
    <span 
      className="inline-block text-base font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl backdrop-blur-md border"
      style={{
        backgroundColor: `${color}25`,
        color: '#fff',
        borderColor: `${color}60`,
        textShadow: `
          0 0 1px rgba(255,255,255,.7),
          0 0 2px ${color}aa,
          0 0 4px ${color}88
        `,
        boxShadow: `0 2px 4px ${color}30, 0 4px 8px rgba(0,0,0,.2), inset 0 0 12px ${color}15`
      }}
    >
      {children}
    </span>
);

export default SkillBadge;