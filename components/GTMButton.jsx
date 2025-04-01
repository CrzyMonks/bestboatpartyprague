'use client';

import { Button } from "@/components/ui/button";
import { sendGTMEvent } from '@next/third-parties/google';

export function GTMButton({ href, children, className }) {
  return (
    <Button 
      asChild 
      className={className || "bg-[#FF5F00] text-white hover:bg-[#FF5F00]/90"}
      onClick={() => sendGTMEvent({
        event: 'purchase',
        click: {
          id: 'buy_tickets',
          text: children,
          classes: className,
          element: 'button',
          target: '_blank',
          url: href
        },
        ecommerce: {
          items: [{
            item_name: 'Boat Party Ticket',
            price: '12.00',
            currency: 'EUR'
          }]
        }
      })}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
} 