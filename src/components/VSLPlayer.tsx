
// src/components/VSLPlayer.tsx
interface VSLPlayerProps {
  src: string;
  title?: string;
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ src, title = 'VSL Video Player' }) => {
  return (
    <div className="my-8">
      <div
        className="relative w-full h-0 overflow-hidden rounded-lg"
        style={{ paddingBottom: '56.25%' }} // 16:9 aspect ratio
      >
        <video
          src={src}
          controls
          playsInline
          title={title}
          className="absolute top-0 left-0 w-full h-full block"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VSLPlayer;
