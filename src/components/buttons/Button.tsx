import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'secondary',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = 'primary',
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          'inline-flex items-center rounded-md  font-bold',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-500',
          'shadow-sm transition duration-300',
          'active:bg-landing-dark-blue active:text-landing-cream-white',
          'disabled:bg-landing-dark-grey disabled:text-landing-cream-white',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-landing-dark-blue py-[15px] px-[32px] text-base tracking-[-0.18px] text-landing-cream-white',
              'border-[0px] border-landing-dark-blue',
              'hover:border-[0px] hover:border-landing-dark-blue hover:tracking-[-0.16px]',
              'active:bg-landing-dark-blue active:text-landing-cream-white',
              'hover:bg-gradient-to-br hover:from-[#A060FF] hover:via-[#CB30E3] hover:to-[#FFA84E]',
            ],
            variant === 'secondary' && [
              'bg-transparent py-[12px] px-[23.5px] text-sm tracking-[-0.16px] text-landing-dark-blue md:text-base',
              'border-[1px] border-landing-dark-blue',
              'hover:border-[1px] hover:bg-landing-dark-blue hover:tracking-[-0.18px]',
              'hover:text-landing-cream-white',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
