import dynamic from 'next/dynamic';
import MainContent from '../components/MainContent';

const ScrollProgress = dynamic(() => import('../components/ScrollProgress'), { ssr: false });

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <MainContent />
    </>
  );
}
