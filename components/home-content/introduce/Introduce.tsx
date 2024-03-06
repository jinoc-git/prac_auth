'use client';

import React from 'react';

import AccordionLinkItem from '@/components/accordion/accordionLinkItem/AccordionLinkItem';
import AccordionNormalItem from '@/components/accordion/accordionNormalItem/AccordionNormalItem';
import { Accordion } from '@/components/ui/accordion';

const Introduce = () => {
  return (
    <Accordion className="w-[380px]" type="single" collapsible>
      <AccordionNormalItem
        value="item-1"
        title="Project"
        desc="Simple Auth Page"
      />
      <AccordionLinkItem
        value="item-2"
        title="Github"
        desc="https://github.com/jinoc-git/simple-auth-page"
        href="https://github.com/jinoc-git/simple-auth-page"
      />
      <AccordionNormalItem
        value="item-3"
        title="Tech Stacks"
        desc="TypeScript, Next.js, React, shadcn/ui"
      />
    </Accordion>
  );
};

export default Introduce;
