import React from 'react';

const SkillBadge: React.FC<{ children: React.ReactNode, color: string }> = ({ children, color }) => (
    <span 
      className="inline-block text-sm font-medium px-3 py-1 rounded-full transition-transform duration-200 hover:scale-105 hover:shadow-md"
      style={{
        backgroundColor: `${color}20`,
        color: color,
        border: `1px solid ${color}50`
      }}
    >
      {children}
    </span>
);

export default SkillBadge;