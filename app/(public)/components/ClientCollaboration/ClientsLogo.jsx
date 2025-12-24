'use client'
import { useState } from 'react';
import Image from 'next/image';
import { blurPlaceholder } from '../utils/blur-placeholder';

function ClientsLogo() {
  const items = [
    {
      id: 1,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-2.webp',
      line: 'yes'
    },
    {
      id: 2,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-11.webp',
      line: 'yes'
    },
    {
      id: 3,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-12.webp',
      line: 'yes'
    },
    {
      id: 4,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-6.webp',
      line: 'yes'
    },
    {
      id: 5,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-8.webp',
      line: 'yes'
    },
    {
      id: 6,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-3.webp',
      line: 'yes'
    },
    {
      id: 7,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-7.webp',
      line: 'yes'
    },
    {
      id: 8,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-5.webp',
      line: 'yes'
    },
    {
      id: 9,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-9.webp',
      line: 'yes'
    },
    {
      id: 10,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-10.webp',
      line: 'yes'
    },
    {
      id: 11,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-4.webp',
      line: 'yes'
    },
    {
      id: 12,
      src: 'https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/homePage/clients-logo/logo-1.webp',
      line: 'yes'
    },
  ];



  return (
    <div className='px-5 xl:px-20 2xl:px-50'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
        {items.map((item, index) => (
          <div
            key={item.id}
            className='flex items-center justify-center rounded bg-white p-2 h-[180px]'
          >
            <div className='relative w-full flex items-center justify-center'>

              {/* Image */}
              <Image
                src={item.src}
                alt={`Item ${item.id}`}
                width={500}
                height={500}
                priority
                loading="eager"
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                className='object-contain w-full h-[120px] md:h-[180px]'
              />
            </div>

            {item.line === 'yes' && (
              <div className='h-[70px] w-[1px] bg-black/20 rotate-12 ml-5'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientsLogo;
