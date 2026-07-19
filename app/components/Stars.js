/**
 * Stars — a small row of filled stars for verified 5-star reviews.
 * Only use where the rating is genuine; the aria-label states the rating
 * for screen readers.
 */
export default function Stars({ count = 5, size = 14 }) {
  return (
    <div className="stars" role="img" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2.4l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.42l-5.88 3.09 1.12-6.55L2.48 9.32l6.58-.96z" />
        </svg>
      ))}
    </div>
  )
}
