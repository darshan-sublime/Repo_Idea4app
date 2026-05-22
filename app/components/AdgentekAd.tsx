'use client';
import { useEffect, useRef, useState } from 'react';

export default function AdgentekAd({ context = 'general' }: { context?: string }) {
  const apiKey = process.env.NEXT_PUBLIC_ADGENTEK_API_KEY;
  const slotId = process.env.NEXT_PUBLIC_ADGENTEK_SLOT_ID;
  const initializedRef = useRef(false);
  const [adEnabled, setAdEnabled] = useState<boolean | null>(null);

  // In preview mode or if ads are not configured, hide completely
  if (!apiKey || !slotId || slotId === 'managed-preview-slot') {
    return null;
  }

  useEffect(() => {
    // If no slotId, we can't check status, but we might still try to load a default if apiKey exists
    if (!slotId) return;

    const checkStatus = async () => {
      try {
        const platformUrl = 'https://idea4app.ai';
        const response = await fetch(`${platformUrl}/api/ads/status?slotId=${slotId}`);
        const data = await response.json();
        setAdEnabled(data.enabled !== false);
      } catch (err) {
        console.error('Failed to check ad status:', err);
        setAdEnabled(true);
      }
    };

    checkStatus();
  }, [slotId]);

  useEffect(() => {
    if (!apiKey || !slotId || adEnabled === false || initializedRef.current) return;

    const initAndShow = () => {
      const adgentek = (window as any).AdgentekAds;
      if (adgentek) {
        adgentek.init({
          apiKey,
          slotId,
          containerId: 'adgentek-ad'
        });
        adgentek.showAd([
          { role: 'system', content: `Page context: ${context}` }
        ]);
        initializedRef.current = true;
        return true;
      }
      return false;
    };

    if (!initAndShow()) {
      const interval = setInterval(() => {
        if (initAndShow()) {
          clearInterval(interval);
        }
      }, 500);

      return () => clearInterval(interval);
    }
  }, [apiKey, slotId, context, adEnabled]);

  if (adEnabled === false) return null;

  return (
    <div className="adgentek-ad" style={{ maxWidth: '728px', margin: '24px auto', textAlign: 'center', position: 'sticky', bottom: '12px', zIndex: 40, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)', padding: '12px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
      <div id="adgentek-ad" style={{ minHeight: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {(!apiKey || !slotId) && (
          <div style={{ padding: '20px', color: '#64748b', fontSize: '14px' }}>
            <div className="animate-pulse text-accent-500 font-medium mb-1">Connecting to Adgentek Ads...</div>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>Experience the future of contextual monetization</div>
          </div>
        )}
      </div>
      <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '8px' }}>Sponsored Content</div>
    </div>
  );
}
