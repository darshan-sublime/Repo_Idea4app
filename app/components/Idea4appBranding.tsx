'use client';
import { useEffect, useState } from 'react';

export default function Idea4appBranding() {
  const projectId = process.env.NEXT_PUBLIC_I4A_PROJECT_ID;
  const [showBranding, setShowBranding] = useState<boolean | null>(null);

  useEffect(() => {
    if (!projectId) {
      setShowBranding(true);
      return;
    }

    if (projectId === 'managed-preview-project') {
      setShowBranding(true);
      return;
    }

    const checkStatus = async () => {
      try {
        const platformUrl = 'https://idea4app.ai';
        const response = await fetch(`${platformUrl}/api/branding/status?projectId=${projectId}`);
        const data = await response.json();
        setShowBranding(data.enabled !== false);
      } catch (err) {
        console.error('Failed to check branding status:', err);
        setShowBranding(true);
      }
    };

    checkStatus();
  }, [projectId]);

  if (showBranding === null || showBranding === false) return null;

  return (
    <a
      href="https://idea4app.ai"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '16px',
        left: '16px',
        zIndex: 9999,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '8px',
        backgroundColor: 'rgba(0,0,0,0.75)',
        color: '#fff',
        fontSize: '12px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textDecoration: 'none',
        backdropFilter: 'blur(8px)',
        transition: 'opacity 0.2s',
        opacity: 0.85,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.85')}
    >
      ⚡ Built with idea4app.ai
    </a>
  );
}
