import { useTranslation } from 'react-i18next';
import { documentSections } from '../data/documents.js';

// Generic documents page (license, bylaws, board minutes, policies).
// Pass `section` = a key of documentSections.
function FileIcon({ type }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-sand/50 text-xs font-bold uppercase text-primary">
      {type === 'pdf' ? 'PDF' : 'IMG'}
    </div>
  );
}

export default function DocumentsPage({ section }) {
  const { t } = useTranslation();
  const data = documentSections[section];

  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <h1 className="section-title">{t(data.titleKey)}</h1>
        <p className="section-subtitle">{t(data.subtitleKey)}</p>
        <div className="mx-auto mt-4 h-1 w-16 rounded bg-gold" />

        {data.items.length === 0 ? (
          <div className="mx-auto mt-12 max-w-md rounded-xl border border-dashed border-gold/60 bg-sand/20 p-10 text-center">
            <p className="font-semibold text-primary">{t('docs.empty.title')}</p>
            <p className="mt-2 text-sm text-ink/70">{t('docs.empty.body')}</p>
          </div>
        ) : (
          <div className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-6">
            {data.items.map((doc) => (
              <article
                key={doc.file}
                className="group flex w-full flex-col overflow-hidden sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                {doc.type === 'image' ? (
                  <a href={doc.file} target="_blank" rel="noreferrer" className="block bg-sand/20">
                    <img src={doc.file} alt={t(doc.titleKey)} className="h-56 w-full object-contain p-3" />
                  </a>
                ) : (
                  <div className="flex h-2 bg-gradient-to-l from-primary to-gold" />
                )}
                <div className="flex flex-1 items-start gap-4 p-5">
                  <FileIcon type={doc.type} />
                  <h2 className="text-base font-bold leading-relaxed text-primary">{t(doc.titleKey)}</h2>
                </div>
                <div className="flex gap-3 border-t border-ink/10 p-4">
                  <a href={doc.file} target="_blank" rel="noreferrer" className="btn-primary flex-1 !px-3 !py-2 text-sm">
                    {t('docs.view')}
                  </a>
                  <a
                    href={doc.file}
                    download
                    className="inline-flex flex-1 items-center justify-center rounded-md border border-primary px-3 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                  >
                    {t('docs.download')}
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
