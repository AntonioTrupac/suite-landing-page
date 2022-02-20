import * as React from 'react';

import Author from '@/components/Author';
import Leads from '@/components/Leads';
import Seo from '@/components/Seo';
import { Welcome } from '@/components/Welcome';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />
      <main>
        <Welcome />
        <Leads companies='2K' languages={8} leads='1.2' />
        <Author />
      </main>
    </>
  );
}
