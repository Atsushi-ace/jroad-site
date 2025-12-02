import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { ProcessSteps } from '@/components/sections/ProcessSteps';

export const metadata: Metadata = {
  title: 'サービス一覧｜J-Roadの柔道ツーリズム & 柔道留学支援',
  description:
    'J-Roadが提供する柔道ツーリズムと柔道留学支援サービスの一覧。日本での短期滞在から中長期の留学まで、目的に合わせた柔道体験をコーディネートします。',
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 pb-16">
      <PageHeader
        title="サービス内容"
        subtitle="「日本旅行の際に道場に行きたい」「信頼できる人から日本文化を学びたい」というニーズに応える、柔道特化のプログラムを用意しています。"
      />

      <ServiceCards
        services={[
          {
            title: '柔道ツーリズム',
            slug: 'judo-tourism',
            description:
              '数日〜1週間程度の滞在で、日本の道場稽古と観光・文化体験を組み合わせたオーダーメイドツアー。',
            link: '/services/judo-tourism',
          },
          {
            title: '柔道留学斡旋支援(今後展開予定)',
            slug: 'judo-study',
            description:
              '数ヶ月〜数年単位の中長期滞在を想定した、道場・学校・住環境などのトータルコーディネート。',
            link: '/services/judo-study',
          },
        ]}
      />

      <ProcessSteps
        title="ご利用の流れ"
        steps={[
          'お問い合わせ・ヒアリング：目的・レベル・ご希望時期・予算をお伺いします。',
          'プラン提案：ヒアリング内容をもとに、道場・滞在期間・文化体験を組み合わせたプランをご提案。',
          '最終調整・ご契約：日程や内容を確定し、必要な手続きのサポートを行います。',
          'ご渡航・現地サポート：到着後の初日アテンドや、トラブル時の連絡窓口としてサポートします。',
        ]}
      />
    </div>
  );
}
