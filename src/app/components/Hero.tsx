export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/knessetVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/*<div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Have Your Say on the Latest Knesset Bills!
        </h1>
        <p className="text-xl md:text-2xl">
          Browse proposed laws, vote, and share your thoughts.
        </p>
      </div>*/}
    </div>
  );
}
