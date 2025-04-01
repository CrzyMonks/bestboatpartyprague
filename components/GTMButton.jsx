'use client';

import { Button } from "@/components/ui/button";
import { sendGTMEvent } from '@next/third-parties/google';

export function GTMButton({ href, children }) {
  return (
    <Button asChild onClick={() => sendGTMEvent({
      event: 'buttonClick',
      value: {
        buttonText: children,
        destination: href,
        buttonId: 'organizer-link'
      }
    })}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
} 