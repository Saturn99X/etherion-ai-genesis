// src/components/VSLPlayer.tsx
interface VSLPlayerProps {
  src: string;
  title?: string;
}

const VSLPlayer: React.FC<VSLPlayerProps> = ({ src, title = 'VSL Video Player' }) => {
  return (
    <div style={{ margin: '2rem 0' }}> {/* Existing margin for spacing */}
      <div
        className="vsl-aspect-ratio-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100)
          height: 0,
          overflow: 'hidden',
        }}
      >
        <video
          src={src}
          controls
          autoPlay={false}
          title={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'block', // Ensure it's a block to fill the container
          }}
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VSLPlayer;
