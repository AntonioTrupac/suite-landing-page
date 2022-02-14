import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <Button>Request Beta Access</Button>
        <Button variant='secondary'>Request Beta Access</Button>
      </main>
    </Layout>
  );
}
