import RevealSplit from './RevealSplit.jsx';
import { useLang } from '../lib/i18n.jsx';

// Eyebrow + two-line display title animated with React Bits <SplitText>.
// Arabic is split by words so letters keep their joined shapes.
export default function SectionHead({ eyebrow, title, lead, tone = 'dark', align = 'start', id }) {
  const { isAr } = useLang();
  return (
    <header className={`section-head section-head--${tone} section-head--${align}`}>
      <p className="eyebrow" data-reveal>
        <span className="eyebrow__bar" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="display" id={id}>
        {title.map((line, i) => (
          <RevealSplit
            key={line}
            text={line}
            className={`display__line${i === title.length - 1 ? ' display__line--accent' : ''}`}
            splitType={isAr ? 'words' : 'chars'}
            textAlign="start"
            delay={isAr ? 70 : 22}
            duration={1.1}
          />
        ))}
      </h2>
      {lead && (
        <p className="section-lead" data-reveal>
          {lead}
        </p>
      )}
    </header>
  );
}
