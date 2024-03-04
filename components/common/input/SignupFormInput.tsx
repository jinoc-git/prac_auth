'use client';

import React from 'react';
import type { Control } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import type { signupFormSchema } from '@/schema/signupFormSchema';
import type { z } from 'zod';

export interface SignupFormInputProps {
  control: Control<z.infer<typeof signupFormSchema>>;
  name: keyof z.infer<typeof signupFormSchema>;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
}

const SignupFormInput = (props: SignupFormInputProps) => {
  const { control, name, label, placeholder, type } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SignupFormInput;
