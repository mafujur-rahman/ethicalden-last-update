'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { blurPlaceholder } from '../utils/blur-placeholder';

const MarziiBannerImg = () => {

    return (
        <div className="w-full xl:h-screen relative">


            <Image
                src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/marzii/banner.webp"
                alt="Banner"
                width={1920}
                height={952}
                className="w-full h-auto"
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                priority
                loading="eager"
            />
        </div>
    );
};

export default MarziiBannerImg;
