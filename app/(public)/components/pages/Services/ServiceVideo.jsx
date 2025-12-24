
import React from 'react';

const ServiceVideo = () => {
  return (
    <div className="w-full aspect-video overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/servicePage/service-video.webm"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default ServiceVideo;
