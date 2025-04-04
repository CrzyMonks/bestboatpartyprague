'use client';

import { Button } from "@/components/ui/button";
import { sendGTMEvent } from '@next/third-parties/google';

export function GTMButton({ href, children, className, clickId, buttonId, asChild = true }) {
  return (
    <Button 
      asChild={asChild}
      className={className}
      onClick={() => sendGTMEvent({
        event: 'purchase',
        click: {
          id: clickId || 'buy_tickets',
          text: children,
          classes: className,
          element: 'button',
          target: '_blank',
          url: href
        },
        // ecommerce: {
        //   items: [{
        //     item_name: 'Boat Party Ticket',
        //     price: '12.00',
        //     currency: 'EUR'
        //   }]
        // }
      })}
    >
      {asChild ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : children}
    </Button>
  );
} 