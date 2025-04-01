'use client';

import { Button } from "@/components/ui/button";
import { sendGTMEvent } from '@next/third-parties/google';

export function GTMButton({ href, children }) {
  return (
    <Button 
      asChild 
      className="bg-[#FF5F00] text-white hover:bg-[#FF5F00]/90"
      onClick={() => sendGTMEvent({
        event: 'buttonClick',
        value: {
          buttonText: children,
          destination: href,
          buttonId: 'organizer-link',
          clickId: 'buy_tickets' 
        }
      })}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
} 