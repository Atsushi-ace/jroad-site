import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サービス内容｜J-Road',
  description: '柔道体験、柔道ツーリズム、柔道留学斡旋支援など、J-Roadが提供する柔道特化のプログラムをご紹介します。',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          サービス内容
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          柔道体験、柔道ツーリズム、柔道留学斡旋支援など、J-Roadが提供する柔道特化のプログラムをご紹介します。
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Link
            href="/services/judo-experience"
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">柔道体験</h2>
            <p className="mt-2 text-sm text-slate-600">
              日本の道場で柔道を体験できるプログラム。
            </p>
          </Link>
          <Link
            href="/services/judo-tourism"
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">柔道ツーリズム</h2>
            <p className="mt-2 text-sm text-slate-600">
              数日〜1週間程度の滞在で、日本の道場稽古と観光・文化体験を組み合わせたオーダーメイドツアー。
            </p>
          </Link>
          <Link
            href="/services/judo-study"
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-[1px] hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900">柔道留学斡旋支援</h2>
            <p className="mt-2 text-sm text-slate-600">
              数ヶ月〜数年単位の中長期滞在を想定した、道場・学校・住環境などのトータルコーディネート。
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

