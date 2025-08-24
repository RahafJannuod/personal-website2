import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode, color: string }> = ({ children, color }) => (
    <span 
      className="inline-block text-base font-medium px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl backdrop-blur-md border"
      style={{
        backgroundColor: `${color}15`,
        color: '#fff',
        borderColor: `${color}40`,
        textShadow: `
          0 0 1px rgba(255,255,255,.5),
          0 0 2px rgba(255,255,255,.3),
          0 0 4px ${color}88
        `,
        boxShadow: `0 2px 4px ${color}15, 0 4px 8px rgba(0,0,0,.1)`
      }}
    >
      {children}
    </span>
);

export default SkillBadge;