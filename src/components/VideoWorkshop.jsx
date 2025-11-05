import React from 'react';

const videos = [
  'https://videos.pexels.com/video-files/2796115/2796115-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/2796099/2796099-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/2796108/2796108-uhd_2560_1440_30fps.mp4',
];

const VideoCard = ({ src, title }) => (
  <figure className="overflow-hidden rounded-xl bg-black shadow-sm">
    <video className="h-64 w-full object-cover" src={src} autoPlay loop muted playsInline />
    {title && (
      <figcaption className="p-3 text-sm text-neutral-300">{title}</figcaption>
    )}
  </figure>
);

const VideoWorkshop = () => {
  return (
    <section id="laboratorio" className="bg-neutral-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Video / Il Laboratorio</h2>
        <p className="mt-3 max-w-3xl text-neutral-700">
          “Scopri come nasce la ceramica. Guarda i nostri video dietro le quinte: ogni forma prende vita attraverso
          gesti antichi, fuoco e passione. Un viaggio dentro l’arte della ceramica.”
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <VideoCard key={i} src={v} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoWorkshop;
