import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className=' py-[24px] px-[16px]'>
      <Header />
      {children}
    </div>
  );
}
