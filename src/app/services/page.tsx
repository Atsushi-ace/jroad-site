import type { Metadata } from 'next';
import { Services } from '@/components/sections/Services';

export const metadata: Metadata = {
  title: 'サービス内容｜J-Road',
  description: '柔道体験、柔道ツーリズム、柔道留学斡旋支援など、J-Roadが提供する柔道特化のプログラムをご紹介します。',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Services />
    </div>
  );
}

