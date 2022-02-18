import Image from 'next/image';
import React from 'react';

import Button from '@/components/buttons/Button';

const Heading = () => {
  return (
    <div className='flex flex-wrap'>
      <span className='heading-xl-regular mr-3'>A</span>
      <span className='heading-xl-bold mr-3'>super solution</span>
      <span className='heading-xl-regular mr-3'>for your</span>
      <span className='heading-xl-bold'>business.</span>
    </div>
  );
};

export const Welcome = () => {
  return (
    <div className='mt-16'>
      {/*TODO:  make image stay above solution*/}
      {/*<img*/}
      {/*  className='h-[19px] w-[151px]'*/}
      {/*  src='/assets/pattern-curved-line-1.svg'*/}
      {/*  alt=''*/}
      {/*/>*/}

      <Heading />

      <p className='paragraph mt-8 leading-[28px] xl:leading-[32px]'>
        Our marketing and sales automations help you scale your outreach to get
        more leads for your company.
      </p>

      <Button className='mt-8' variant='primary'>
        Request Beta Access
      </Button>

      <div className='image-wrapper mt-14'>
        <Image
          src='/assets/image-hero-landscape.webp'
          alt='Hero image'
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className='rounded-[15px]'
        />
      </div>
    </div>
  );
};
