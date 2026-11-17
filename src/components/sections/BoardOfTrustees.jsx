import { useTranslation } from 'react-i18next';

// A board member card.
function TrusteeCard({ name, role }) {
  return (
    <div className="flex w-56 flex-col items-center text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/50 bg-sand/30">
        <span className="text-2xl text-gold">◆</span>
      </div>
      <div className="mt-3 text-sm font-semibold text-gold">{role}</div>
      <div className="mt-1 font-bold leading-relaxed text-primary">{name}</div>
    </div>
  );
}

// Board of trustees: chair + vice on the first row, members below.
// Used on the About page and the Board Members page.
export default function BoardOfTrustees({ showTitle = true }) {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container">
        {showTitle && <h2 className="section-title">{t('about.page.boardTitle')}</h2>}
        <div className={`${showTitle ? 'mt-12' : ''} flex flex-col items-center gap-10`}>
          {/* Chair + vice */}
          <div className="flex flex-wrap justify-center gap-12">
            <TrusteeCard name={t('about.page.board.chairName')} role={t('about.page.board.chairRole')} />
            <TrusteeCard name={t('about.page.board.viceName')} role={t('about.page.board.viceRole')} />
          </div>
          {/* Members */}
          <div className="flex flex-wrap justify-center gap-12">
            <TrusteeCard name={t('about.page.board.m1Name')} role={t('about.page.board.memberRole')} />
            <TrusteeCard name={t('about.page.board.m2Name')} role={t('about.page.board.memberRole')} />
            <TrusteeCard name={t('about.page.board.m3Name')} role={t('about.page.board.memberRole')} />
          </div>
        </div>
      </div>
    </section>
  );
}
