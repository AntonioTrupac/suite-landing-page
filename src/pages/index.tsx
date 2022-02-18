import * as React from 'react';

import Seo from '@/components/Seo';
import { Welcome } from '@/components/Welcome';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <Welcome />
      </main>
    </>
  );
}
