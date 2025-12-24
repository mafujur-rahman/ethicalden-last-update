'use client'
import React, { useState } from 'react';
import { blurPlaceholder } from '../utils/blur-placeholder';
import Image from 'next/image';

const MakCommunityBannerImg = () => {

    return (
        <div className="w-full xl:h-screen relative">



            <Image
                src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/work-details/mak-community/banner.webp"
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

export default MakCommunityBannerImg;
