'use client';

import React from 'react';

import Link from 'next/link';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import type { AccordionNormalItemProps } from '../accordionNormalItem/AccordionNormalItem';

interface AccordionLinkItemProps extends AccordionNormalItemProps {
  href: string;
}

const AccordionLinkItem = (props: AccordionLinkItemProps) => {
  const { value, title, desc, href } = props;

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <Link target="_blank" href={href}>
          {desc}
        </Link>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionLinkItem;
