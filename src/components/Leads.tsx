import * as React from 'react';

/**
 * @param companies represents number of companies, but is a string since u can put 2K+
 * @param languages represents number of languages
 * @param leads represents number of leads, but is a string since u can put 1.2M
 *
 */

type Props = {
  companies: string;
  languages: number;
  leads: string;
};

const Leads = ({ companies, languages, leads }: Props) => {
  return (
    <div className='mt-14 flex flex-col items-center justify-center md:flex-row md:justify-between'>
      <div className='flex flex-col items-center'>
        <p className='heading-xl-regular'>{companies}+</p>
        <p className='paragraph'>COMPANIES</p>
      </div>

      <div className='mt-8 flex flex-col items-center md:mt-0'>
        <p className='heading-xl-regular'>{languages}</p>
        <p className='paragraph'>LANGUAGES</p>
      </div>

      <div className='mt-8 flex flex-col items-center md:mt-0'>
        <p className='heading-xl-regular'>{leads}M</p>
        <p className='paragraph'>LEADS</p>
      </div>
    </div>
  );
};

export default Leads;
