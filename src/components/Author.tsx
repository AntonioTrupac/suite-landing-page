import * as React from 'react';

type Props = {
  className: string;
};

const Title = () => {
  return (
    <div className='flex flex-wrap justify-center pt-10'>
      <h1 className='heading-xl-regular mr-3 text-landing-cream-white'>
        It just
      </h1>
      <h1 className='heading-xl-bold text-landing-cream-white'>works.</h1>
    </div>
  );
};

const Quote = ({ className }: Props) => {
  return (
    <div className={className}>
      <p className='quote text-center text-landing-cream'>
        “I really like how it is an all-in-one solution that handle many of the
        tasks that you would normally need separate tools to do the same job.
        This thing is a miracle worker.”
      </p>
    </div>
  );
};

const AuthorName = ({ className }: Props) => {
  return (
    <div className={className}>
      <h1 className='text-[18px] font-bold text-landing-cream-white'>
        JEREMY ROBINSON
      </h1>
      <p className='letter-spacing-a text-base leading-[26px] text-landing-cream'>
        CMO, FYLO
      </p>
    </div>
  );
};

const Author = () => {
  return (
    <div className='mt-10 rounded-md rounded-[16px] bg-landing-dark-blue'>
      <Title />
      <Quote className='mx-4 mt-10' />
      <AuthorName className='mt-10 flex flex-col items-center pb-16' />
    </div>
  );
};

export default Author;
