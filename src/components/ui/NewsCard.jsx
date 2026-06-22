import { useTranslation } from 'react-i18next';

export default function NewsCard({ item }) {
  const { t, i18n } = useTranslation();
  const locale = i18n.language?.startsWith('en') ? 'en-US' : 'ar-SA';
  const date = new Date(item.date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });

  return (
    <article className="group flex items-center gap-4 border-s-4 border-gold bg-white p-3 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex-1">
        <h3 className="font-semibold text-primary group-hover:text-primary-dark">
          {t(item.titleKey)}
        </h3>
        <time className="mt-1 block text-sm text-ink/60">{date}</time>
      </div>
      <div
        className="h-20 w-24 shrink-0 rounded bg-sand/60 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.image})` }}
        aria-hidden="true"
      />
    </article>
  );
}
