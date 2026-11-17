import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader.jsx';

// Executive director contact card. Text lives in translation files (execDirector.*).
export default function ExecutiveDirectorPage() {
  const { t } = useTranslation();
  const phone = t('execDirector.phone');
  const email = t('execDirector.email');

  return (
    <>
      <PageHeader title={t('execDirector.title')} subtitle={t('execDirector.subtitle')} />

      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm">
            <div className="h-2 bg-gradient-to-l from-primary to-gold" />
            <div className="flex flex-col items-center px-8 pb-8 pt-10 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gold/50 bg-sand/30">
                <span className="text-3xl text-gold">◆</span>
              </div>
              <div className="mt-4 text-sm font-semibold text-gold">{t('execDirector.role')}</div>
              <h2 className="mt-1 text-xl font-bold text-primary">{t('execDirector.name')}</h2>
            </div>

            <dl className="divide-y divide-ink/10 border-t border-ink/10">
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <dt className="text-sm text-ink/60">{t('execDirector.phoneLabel')}</dt>
                <dd>
                  <a href={`tel:${phone}`} dir="ltr" className="font-semibold text-primary hover:text-gold">
                    {phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <dt className="text-sm text-ink/60">{t('execDirector.emailLabel')}</dt>
                <dd>
                  <a href={`mailto:${email}`} dir="ltr" className="font-semibold text-primary hover:text-gold">
                    {email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
