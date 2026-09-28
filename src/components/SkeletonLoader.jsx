export default function SkeletonLoader({ type = 'card', count = 1 }) {
  const skeletons = Array.from({ length: count });

  const cardSkeleton = (
    <div className="skeleton-card">
      <div className="skeleton-image" />
      <div className="skeleton-line" />
      <div className="skeleton-line skeleton-line-short" />
    </div>
  );

  const textSkeleton = (
    <div className="skeleton-text">
      <div className="skeleton-line" />
      <div className="skeleton-line" />
      <div className="skeleton-line skeleton-line-short" />
    </div>
  );

  return (
    <>
      <div className="skeleton-wrapper">
        {skeletons.map((_, i) => (
          <div key={i} className="skeleton-item">
            {type === 'card' ? cardSkeleton : textSkeleton}
          </div>
        ))}
      </div>
      <style>{`
        .skeleton-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          width: 100%;
        }
        .skeleton-item {
          animation: skeletonPulse 1.5s infinite;
        }
        .skeleton-card, .skeleton-text {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .skeleton-image {
          width: 100%;
          height: 200px;
          background: #e0e0e0;
          border-radius: 12px;
        }
        .skeleton-line {
          height: 12px;
          background: #e0e0e0;
          border-radius: 6px;
        }
        .skeleton-line-short {
          width: 70%;
        }
        @keyframes skeletonPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
