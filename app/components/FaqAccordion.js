/**
 * FaqAccordion — expandable FAQ built on native <details>/<summary>
 * (keyboard-accessible, works without JS). Pass items as [question, answer] pairs.
 */
export default function FaqAccordion({ items }) {
  return (
    <div className="faq-accordion">
      {items.map(([q, a], i) => (
        <details key={i} className="faq-item">
          <summary className="faq-q">
            <span>{q}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </summary>
          <p className="faq-a">{a}</p>
        </details>
      ))}
    </div>
  )
}
