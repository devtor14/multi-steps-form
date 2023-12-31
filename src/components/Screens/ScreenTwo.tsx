'use client';

import { useGlobalContext } from '@/context/GlobalContext';

import { PLAN_TYPE } from '@/actions/types';
import { RADIO_LIST } from '@/utils/constants';

export function ScreenTwo() {
  const { globalState, dispatcher } = useGlobalContext();
  return (
    <fieldset className='flex flex-wrap flex-col lg:flex-row justify-center items-center gap-4'>
      {RADIO_LIST(globalState.planType).map((radio) => (
        <label
          key={radio.label}
          className='w-full lg:w-[189px] lg:h-[170px] cursor-pointer'
        >
          <input
            type='radio'
            name='plan'
            value={radio.label}
            className='sr-only peer'
          />
          <article className='p-5 w-full lg:h-full flex lg:flex-col items-center lg:items-start gap-4 rounded-lg ring-1 ring-Light-gray peer-checked:ring-Purplish-blue hover:ring-Purplish-blue peer-checked:bg-Purplish-blue peer-checked:bg-opacity-5 transition-[colors, opacity] ease-out duration-200'>
            <i aria-hidden='true'>{radio.icon}</i>
            <section className='w-full'>
              <span className='w-full md:text-lg text-Marine-blue font-medium'>{radio.label}</span>
              <span className='w-full flex lg:flex-col justify-between items-center lg:items-start text-sm md:text-base text-Cool-gray'>
                ${radio.price}/{globalState.planType ? 'yr' : 'mo'}
                <span className={`text-xs md:text-sm text-Marine-blue ${globalState.planType ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity ease-out duration-200`}>2 months free</span>
              </span>
            </section>
          </article>
        </label>
      ))}

      <section className='py-4 w-full flex flex-grow-0 justify-center gap-4 rounded-lg bg-Alabaster'>
        <span className={`text-sm font-medium ${!globalState.planType ? 'text-Marine-blue' : 'text-Cool-gray'}`}>Monthly</span>
        <button
          type='button'
          className='p-1 w-9 h-fit rounded-full bg-Marine-blue'
          onClick={() => dispatcher({ type: PLAN_TYPE })}
        >
          <div className={`w-3 h-3 rounded-full bg-White ${globalState.planType ? 'translate-x-[16px]' : 'translate-x-0'} ease-out duration-100 transition-transform`} />
        </button>
        <span className={`text-sm font-medium ${globalState.planType ? 'text-Marine-blue' : 'text-Cool-gray'}`}>Yearly</span>
      </section>
    </fieldset>
  );
}
