import * as React from 'react';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main className={clsxm('')}>
        <Button variant='primary'>Request Beta Access</Button>
        <Button variant='outline'>Request Beta Access</Button>
      </main>
    </Layout>
  );
}
