'use clent';

import React from 'react';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import type { SignupFormInputProps } from './SignupFormInput';

interface SignupFormSelectInputProps extends SignupFormInputProps {
  item: Record<string, string>;
}

const SignupFormSelectInput = (props: SignupFormSelectInputProps) => {
  const { control, name, label, placeholder, item } = props;
  const itemList = Object.entries(item);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {/* key 수정 필요 */}
              {itemList.map(([value, name], idx) => (
                <SelectItem key={idx} value={value}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SignupFormSelectInput;
