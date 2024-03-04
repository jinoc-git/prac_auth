'use client';

import React from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { MoveRightIcon } from 'lucide-react';

import { signupFormSchema } from '@/schema/signupFormSchema';

import SignupFormInput from '../common/input/SignupFormInput';
import SignupFormSelectInput from '../common/input/SignupFormSelectInput';
import { Button } from '../ui/button';
import { Form } from '../ui/form';

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

  const roleItemList = {
    관리자: '관리자',
    '일반 사용자': '일반 사용자',
  };

  return (
    <section className=" absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[380px] rounded-lg border bg-card text-card-foreground shadow-sm">
      <Form {...signupForm}>
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            계정을 생성합니다
          </h3>
          <p className="text-sm text-muted-foreground">
            필수 정보를 입력해 주세요.
          </p>
        </div>
        <div className="p-6 pt-0">
          <form className="relative space-y-3 overflow-x-hidden">
            <div className="space-y-3">
              <SignupFormInput
                control={signupForm.control}
                name="username"
                label="이름"
                placeholder="홍길동"
              />
              <SignupFormInput
                control={signupForm.control}
                name="email"
                label="이메일"
                placeholder="example@example.com"
              />
              <SignupFormInput
                control={signupForm.control}
                name="phone"
                label="연락처"
                placeholder="01012345678"
              />
              <SignupFormSelectInput
                control={signupForm.control}
                name="role"
                label="역할"
                placeholder="역할을 선택해 주세요."
                item={roleItemList}
              />
            </div>
            <div
              className="space-y-3 absolute top-0 left-0 right-0"
              style={{ transform: 'translateX(100%)' }}
            >
              <SignupFormInput
                control={signupForm.control}
                name="password"
                label="비밀번호"
                placeholder="비밀번호를 입력해 주세요."
                type="password"
              />
              <SignupFormInput
                control={signupForm.control}
                name="confirmPassword"
                label="비밀번호 확인"
                placeholder="비밀번호를 다시 입력해 주세요."
                type="password"
              />
            </div>
            <div className="flex gap-2">
              <Button type="button">계정 등록하기</Button>
              <Button type="button">
                다음 단계로
                <MoveRightIcon className="w-4 h-4 ml-2" />
              </Button>
              <Button type="button" variant="ghost">
                계정 등록하기
              </Button>
            </div>
          </form>
        </div>
      </Form>
    </section>
  );
};

export default SignupForm;
