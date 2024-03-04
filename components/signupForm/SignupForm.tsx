'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { signupFormSchema } from '@/schema/signupFormSchema';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';

import type { z } from 'zod';

const SignupForm = () => {
  const signupForm = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      phone: '',
      role: '',
      password: '',
      confirmPassword: '',
    },
  });
  const {
    formState: { errors },
  } = signupForm;
  console.log(errors);

  return (
    <Form {...signupForm}>
      <form className="space-y-8">
        <FormField
          control={signupForm.control}
          name="username"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel>이름</FormLabel>
              <FormControl>
                <Input placeholder="홍길동" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  );
};

export default SignupForm;
