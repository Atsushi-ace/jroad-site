import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { JapaneseBackground } from '@/components/decorative/JapaneseBackground';

const members = [
  {
    name: '瀬戸口雄輝',
    role: '代表 / 柔道指導者',
    bio: '柔道名門校に進学し、メンバーとして活躍した。その後、教員となり私立中高一貫校で担任兼柔道部顧問として勤める。現在は東京都の私学に勤務し柔道ならびに保健体育を指導している。そして、J-Road全体のコンセプト設計と道場ネットワークを統括している。',
  },
];

export const metadata: Metadata = {
  title: 'メンバー｜J-Roadを支える専門チーム',
  description: '柔道界と国際交流に精通したJ-Roadのメンバーをご紹介。世界と日本を柔道でつなぐ専門チームがサポートします。',
};

export default function MembersPage() {
  const member = members[0];
  
  return (
    <div className="pb-16 relative">
      <PageHeader
        title="メンバー"
        subtitle="柔道界に精通し、国際的な視点を持つメンバーが、皆さまの体験を丁寧にコーディネートします。"
      />

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 relative">
        <div className="space-y-12">
          {/* メイン見出し */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl tracking-tight leading-tight">
              {member.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-muted md:text-xl">
              {member.role}
            </p>
            <div className="mt-8 flex justify-center">
              <div className="w-full max-w-md overflow-hidden rounded-2xl bg-muted shadow-japanese">
                <img
                  src="/瀬戸口さん_表面.jpg"
                  alt={member.name}
                  className="w-full h-auto object-contain"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* 詳細情報 */}
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-subtle bg-card p-8 md:p-12 shadow-japanese space-y-8">
              {/* 学歴 */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">学歴</h3>
                <p className="text-base text-muted md:text-lg">天理大学体育学部体育学科 卒業</p>
              </div>

              {/* 柔道の大会成績 */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">柔道の大会成績</h3>
                <div className="space-y-2 text-base text-muted md:text-lg">
                  <p>年齢：28歳</p>
                  <p>柔道歴：20年</p>
                  <p>小中高大社で全国大会出場</p>
                  <p>大学の時に全国大会上位入賞</p>
                  <p>神奈川県成年の部 国体代表</p>
                </div>
              </div>

              {/* 職歴 */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">職歴</h3>
                <p className="text-base text-muted md:text-lg">教員6年目</p>
              </div>

              {/* 出身地 */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">出身地</h3>
                <p className="text-base text-muted md:text-lg">神奈川県出身</p>
              </div>
            </div>
          </div>

          {/* メッセージコンテンツ */}
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-subtle bg-card p-10 md:p-16 shadow-japanese">
              <div className="prose prose-lg max-w-none">
                <p className="text-base text-muted leading-relaxed md:text-lg md:leading-relaxed whitespace-pre-line">
                  {member.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
