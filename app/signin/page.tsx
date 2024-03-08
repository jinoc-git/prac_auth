import React from 'react';

import SigninForm from '@/components/signinForm/SigninForm';

export default async function Signin() {
  return (
    <main className="min-h-[calc(100vh-88px)]">
      <SigninForm />
    </main>
  );
}
