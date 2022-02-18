import * as React from 'react';

import Button from '@/components/buttons/Button';

import Logo from '../../../public/assets/logo.svg';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex h-[54px] items-center justify-between bg-white'>
      <Logo className='h-[32px] w-[81px]' />
      <Button variant='secondary'>Request Beta Access</Button>
    </header>
  );
}
