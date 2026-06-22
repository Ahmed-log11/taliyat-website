import { useTranslation } from 'react-i18next';

// Reusable page heading band (green) shown at the top of inner pages.
function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-primary py-14 text-center text-white">
      <div className="container">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-3 max-w-2xl text-white/80">{subtitle}</p>}
      </div>
    </div>
  );
}

// A board member card.
function TrusteeCard({ name, role }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/50 bg-sand/30">
        <span className="text-2xl text-gold">◆</span>
      </div>
      <div className="mt-3 text-sm font-semibold text-gold">{role}</div>
      <div className="mt-1 font-bold text-primary">{name}</div>
    </div>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();

  const values = ['v1', 'v2', 'v3', 'v4', 'v5'];
  const tracks = ['t1', 't2', 't3', 't4'];
  const objectives = ['o1', 'o2', 'o3', 'o4'];

  return (
    <>
      <PageHeader title={t('about.title')} subtitle={t('about.page.intro')} />

      {/* Vision + Mission */}
      <section className="py-16">
        <div className="container grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-s-4 border-gold bg-sand/20 p-8">
            <h2 className="text-2xl font-bold text-gold">{t('about.page.visionTitle')}</h2>
            <p className="mt-4 leading-loose text-ink/80">{t('about.page.vision')}</p>
          </div>
          <div className="rounded-2xl border-s-4 border-primary bg-primary/5 p-8">
            <h2 className="text-2xl font-bold text-primary">{t('about.page.missionTitle')}</h2>
            <p className="mt-4 leading-loose text-ink/80">{t('about.page.mission')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand/20 py-16">
        <div className="container">
          <h2 className="section-title">{t('about.page.valuesTitle')}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div key={v} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">
                  {t(`about.page.values.${v}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {t(`about.page.values.${v}Body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main tracks */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">{t('about.page.tracksTitle')}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {tracks.map((tr, i) => (
              <div
                key={tr}
                className="flex gap-4 rounded-xl border border-ink/10 p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gold/15 font-bold text-gold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-bold text-primary">{t(`about.page.tracks.${tr}Title`)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {t(`about.page.tracks.${tr}Body`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="bg-primary py-16 text-white">
        <div className="container">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            {t('about.page.objectivesTitle')}
          </h2>
          <p className="mt-3 text-center text-white/80">{t('about.page.objectivesNote')}</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {objectives.map((o) => (
              <div key={o} className="flex items-start gap-3 rounded-lg bg-white/10 p-4">
                <span className="mt-1 text-gold">✦</span>
                <span className="leading-relaxed">{t(`about.page.objectives.${o}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of trustees */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-title">{t('about.page.boardTitle')}</h2>
          <div className="mt-12 flex flex-col items-center gap-10">
            {/* Chair + vice */}
            <div className="flex flex-wrap justify-center gap-12">
              <TrusteeCard
                name={t('about.page.board.chairName')}
                role={t('about.page.board.chairRole')}
              />
              <TrusteeCard
                name={t('about.page.board.viceName')}
                role={t('about.page.board.viceRole')}
              />
            </div>
            {/* Members */}
            <div className="flex flex-wrap justify-center gap-12">
              <TrusteeCard
                name={t('about.page.board.m1Name')}
                role={t('about.page.board.memberRole')}
              />
              <TrusteeCard
                name={t('about.page.board.m2Name')}
                role={t('about.page.board.memberRole')}
              />
              <TrusteeCard
                name={t('about.page.board.m3Name')}
                role={t('about.page.board.memberRole')}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
