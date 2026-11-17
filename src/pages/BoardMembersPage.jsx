import { useTranslation } from 'react-i18next';
import PageHeader from '../components/ui/PageHeader.jsx';
import BoardOfTrustees from '../components/sections/BoardOfTrustees.jsx';

export default function BoardMembersPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeader title={t('boardPage.title')} subtitle={t('boardPage.subtitle')} />
      <BoardOfTrustees showTitle={false} />
    </>
  );
}
