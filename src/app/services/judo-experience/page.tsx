import type { Metadata } from 'next';
import { PageHeader } from '@/components/sections/PageHeader';
import { TextWithImage } from '@/components/sections/TextWithImage';
import { BulletList } from '@/components/sections/BulletList';
import { InfoGrid } from '@/components/sections/InfoGrid';
import { CTASection } from '@/components/sections/CTASection';
import { ScheduleTable } from '@/components/sections/ScheduleTable';
import { JapaneseDivider } from '@/components/decorative/JapaneseDivider';

export const metadata: Metadata = {
  title: '柔道体験｜1日で日本の柔道と文化を体験',
  description:
    '柔道初心者の方でも安心して参加できる1日体験プログラム。日本の伝統的な道場で柔道の基礎と礼法、日本文化を体験できます。',
};

export default function JudoExperiencePage() {
  return (
    <div className="space-y-16 pb-16 relative">
      <PageHeader
        title="柔道体験"
        subtitle="柔道初心者の方でも安心して参加できる1日体験プログラム。日本の伝統的な道場で柔道の基礎と礼法、日本文化を体験できます。"
      />

      <div className="relative">
        <TextWithImage
          layout="image-right"
          title="柔道初心者向けの1日体験プログラム"
          text="柔道体験は、柔道未経験の方や初心者の方を対象とした、1日で柔道の基礎と日本文化を体験できるプログラムです。日本の伝統的な道場で、柔道の基本動作（受け身、礼法、基本の技）を学びながら、柔道を通じて日本の「礼」や「精神性」に触れることができます。経験豊富な指導者が丁寧にサポートしますので、柔道を初めて体験する方でも安心してご参加いただけます。稽古の後は、道場での体験を振り返りながら、柔道の歴史や文化についても学ぶ時間を設けています。"
          image="https://images.unsplash.com/photo-1542818454-dc05decf9db3?auto=format&fit=crop&w=1200&q=80"
        />
      </div>

      <JapaneseDivider />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          {/* 左側: サービス例 */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl tracking-tight text-shadow-subtle mb-8">
              サービス内容
            </h2>
            <ul className="space-y-4 text-base text-muted md:text-lg leading-relaxed">
              {[
                '日本の伝統的な道場での柔道体験環境の提供',
                '柔道初心者向けの基礎指導（受け身、礼法、基本の技）',
                '道場でのマナー・ルールの丁寧な説明（日本語／英語）',
                '柔道着のレンタル（別料金・対応可能な場合）',
                '柔道の歴史や文化についての簡単な説明',
                '稽古後の振り返りと質疑応答の時間',
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted italic">
              ※指導そのものは道場側のサービスとなり、当社は環境提供・調整を行う立場です。
            </p>
          </div>

          {/* 右側: 1日の流れ */}
          <div>
            <ScheduleTable
              title="1日の流れ"
              schedules={[
                {
                  label: 'モデルプラン',
                  schedule: [
                    { time: '10:00', activity: '集合・道場へ移動（指定の駅／ホテルロビーに集合、道場へ移動、到着後更衣室・荷物置き場などをご案内）' },
                    { time: '10:30', activity: 'オリエンテーション・準備（道場内でのマナー・ルールのご説明、柔道の歴史や文化についての簡単な紹介、着替え・ストレッチなどの事前準備）' },
                    { time: '11:00', activity: '柔道体験開始（準備運動、受け身の練習、基本の立ち方・構え方、簡単な技の体験）' },
                    { time: '12:30', activity: '休憩・振り返り（柔道体験の振り返り、質疑応答、柔道の文化や精神性についての説明）' },
                    { time: '13:00', activity: '礼法の実践（柔道の礼法について学び、実践する時間）' },
                    { time: '13:30', activity: '整理体操・片付け・着替え（クールダウンと簡単な振り返り、道場の清掃・片付けに参加、着替え・写真撮影）' },
                    { time: '14:00', activity: '解散（現地解散、もしくは最寄り駅までご案内。午後は自由行動にお使いいただけます）' },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <InfoGrid
        title="こんな方におすすめ"
        items={[
          '柔道を初めて体験してみたい方',
          '日本の伝統文化や武道に興味がある方',
          '日本旅行中に柔道の基礎を学びたい方',
          '柔道の礼法や精神性に触れたい方',
        ]}
      />

      <CTASection
        title="柔道体験について相談してみる"
        text="柔道未経験の方でも大丈夫です。まずはお気軽にお問い合わせください。"
        cta={{ text: 'お問い合わせフォームへ', link: '/contact' }}
      />
    </div>
  );
}
