import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { JapaneseBackground } from '@/components/decorative/JapaneseBackground';

const members = [
  {
    name: '瀬戸口雄輝',
    role: '代表 / 柔道指導者',
    bio: '全日本強化指定選手として活躍後、20年以上にわたり国内外で柔道指導・国際交流事業に携わる。J-Road全体のコンセプト設計と道場ネットワークを統括。',
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
