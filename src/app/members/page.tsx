import type { Metadata } from 'next';

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
    <>
      {/* 背景画像 - 全画面固定 */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/瀬戸口さん_表面.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
        }}
      >
        {/* オーバーレイ（必要に応じて調整） */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 min-h-screen">

        {/* 名前 - 左上に手書き風の白文字（ヘッダーの下） */}
        <div className="absolute top-24 left-8 md:top-28 md:left-12 z-20">
          <h1 
            className="text-white text-5xl md:text-7xl lg:text-8xl font-bold"
            style={{
              fontFamily: '"Noto Serif JP", "Yu Mincho", "YuMincho", "Hiragino Mincho ProN", serif',
              textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.15em',
              lineHeight: '1.2',
              fontWeight: '900',
              filter: 'drop-shadow(0 3px 6px rgba(0,0,0,0.7))',
              WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
              textStroke: '1px rgba(255, 255, 255, 0.3)',
            }}
          >
            {member.name}
          </h1>
        </div>

        {/* メインコンテンツエリア */}
        <div className="pt-32 md:pt-40 pb-16">
          <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8 relative">
            <div className="space-y-12">
              {/* 詳細情報 */}
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-japanese space-y-8">
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
            <div className="rounded-2xl border border-white/20 bg-white/90 backdrop-blur-sm p-10 md:p-16 shadow-japanese">
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
      </div>
    </>
  );
}
