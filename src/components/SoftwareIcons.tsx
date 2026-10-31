import React from 'react';

export const ShopifyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 7.3l-1.3-.3c-.2 0-.4 0-.5.2l-.7 1.4c-.1.2-.3.3-.5.2l-1.1-.3c-.2 0-.4.1-.4.3l-.2 1.2c0 .2-.2.3-.4.3l-1.2.1c-.2 0-.3.2-.3.4l.2 1.2c0 .2-.1.4-.3.4l-1.1.5c-.2.1-.3.3-.2.5l.5 1.1c.1.2 0 .4-.2.5l-.9.8c-.1.1-.2.3-.1.5l.8 1c.1.2.1.4 0 .5l-.6 1.1c-.1.2 0 .4.2.5l1.1.5c.2.1.3.3.3.5v1.2c0 .2.2.3.4.3l1.2.1c.2 0 .3.2.4.3l.3 1.2c0 .2.2.3.4.3l1.2-.1c.2 0 .4-.1.4-.3l.7-1c.1-.2.3-.3.5-.2l1.1.3c.2 0 .4-.1.4-.3l.5-1.1c.1-.2.3-.3.5-.2l1.1.3c.2 0 .4-.1.4-.3l.2-1.2c0-.2.2-.3.4-.3l1.2-.1c.2 0 .3-.2.3-.4l-.2-1.2c0-.2.1-.4.3-.4l1.1-.5c.2-.1.3-.3.2-.5l-.5-1.1c-.1-.2 0-.4.2-.5l.9-.8c.1-.1.2-.3.1-.5l-.8-1c-.1-.2-.1-.4 0-.5l.6-1.1c.1-.2 0-.4-.2-.5l-1.1-.5c-.2-.1-.3-.3-.3-.5v-1.2c0-.2-.2-.3-.4-.3l-1.2-.1c-.2 0-.3-.2-.4-.3l-.3-1.2c0-.2-.2-.3-.4-.3l-1.2.1c-.2 0-.4.1-.4.3z" fill="#95BF47" />
    <path d="M15.2 3.8l-3.3-1c-.3-.1-.6 0-.8.2L9.5 5.5l1.8 1.1 3.9-2.8z" fill="#5E8E3E" />
    <path d="M19.5 7.1c-.1-.2-.4-.3-.6-.3l-3.7 1.1L13.4 6 12 6.9c-.2.1-.3.3-.3.5l1.2 11.2c0 .3.3.5.6.5h5.4c.3 0 .6-.2.6-.5l.2-11.5z" fill="#95BF47" />
    <path d="M13.2 8.9l-1.5-.9-2.2 1.4-1-.3-1.4 1 1 11c0 .3.3.5.6.5h3.9L13.2 8.9z" fill="#5E8E3E" />
  </svg>
);

export const CanvaIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="url(#canva_grad)" />
    <path d="M8.2 14.5c.8 1.2 2.2 2 3.8 2 2.5 0 4.5-1.8 4.5-4.2 0-2.2-1.8-3.8-4.2-3.8-2.6 0-4.5 2-4.5 4.5 0 1 .3 2 .8 2.8l-.4 1.2 1.2-.3z" fill="white" />
    <path d="M12 10.5c1.1 0 1.8.8 1.8 1.8 0 1.1-.8 2-1.8 2s-1.8-.9-1.8-2c0-1 .7-1.8 1.8-1.8z" fill="#00C4CC" />
    <defs>
      <linearGradient id="canva_grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00C4CC" />
        <stop offset="1" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
  </svg>
);

export const GoogleWorkspaceIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h5.9c-.3 1.4-1.1 2.6-2.3 3.4v2.8h3.7c2.2-2 3.5-5 3.5-8.4z" fill="#4285F4" />
    <path d="M12 23c3 0 5.5-1 7.3-2.8l-3.7-2.8c-1 1-2.4 1.5-3.6 1.5-2.8 0-5.2-1.9-6-4.5H2.1v2.9C3.9 20.8 7.7 23 12 23z" fill="#34A853" />
    <path d="M6 14.4c-.2-.7-.4-1.5-.4-2.4 0-.9.2-1.7.4-2.4V6.7H2.1C1.4 8.2 1 9.8 1 12s.4 3.8 1.1 5.3l3.9-2.9z" fill="#FBBC05" />
    <path d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2C17.5 2 15 1 12 1 7.7 1 3.9 3.2 2.1 6.7l3.9 2.9c.8-2.6 3.2-4.2 6-4.2z" fill="#EA4335" />
  </svg>
);

export const MicrosoftOfficeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="9.5" height="9.5" fill="#F25022" />
    <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7FBA00" />
    <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00A4EF" />
    <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#FFB900" />
  </svg>
);

export const GoHighLevelIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="#1877F2" />
    <path d="M7 17V7l5 5 5-5v10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TrelloIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="4" fill="#0079BF" />
    <rect x="4.5" y="4.5" width="6.5" height="15" rx="1.5" fill="white" />
    <rect x="13" y="4.5" width="6.5" height="9.5" rx="1.5" fill="white" />
  </svg>
);

export const CalendlyIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#006BFF" />
    <path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.5 0 4.6-1.5 5.5-3.6h-2.3c-.7 1-1.9 1.6-3.2 1.6-2.2 0-4-1.8-4-4s1.8-4 4-4c1.3 0 2.5.6 3.2 1.6h2.3C16.6 7.5 14.5 6 12 6z" fill="white" />
  </svg>
);

export const ZoomIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#2D8CFF" />
    <path d="M5 9c0-.6.4-1 1-1h7c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V9z" fill="white" />
    <path d="M15 10.5l4-2.5v8l-4-2.5v-3z" fill="white" />
  </svg>
);

export const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="6" fill="url(#ig_grad)" />
    <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.8" />
    <circle cx="15.5" cy="8.5" r="0.8" fill="white" />
    <defs>
      <radialGradient id="ig_grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4 20) rotate(-45) scale(28)">
        <stop stopColor="#FFDD55" />
        <stop offset="0.3" stopColor="#FF543E" />
        <stop offset="0.6" stopColor="#C837AB" />
        <stop offset="1" stopColor="#3771C8" />
      </radialGradient>
    </defs>
  </svg>
);
