'use client';

import React from 'react';

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion';

export interface AccordionNormalItemProps {
  value: string;
  title: string;
  desc: string;
}

const AccordionNormalItem = (props: AccordionNormalItemProps) => {
  const { value, title, desc } = props;

  return (
    <AccordionItem value={value}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{desc}</AccordionContent>
    </AccordionItem>
  );
};

export default AccordionNormalItem;
