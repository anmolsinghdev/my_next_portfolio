import LoadingSpinner from '@/public/assets/svgs/loading-loop.svg';
import Image from 'next/image';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center align-middle h-screen">
      <Image
        priority
        src={LoadingSpinner}
        alt="Follow us on Twitter"
        height={50}
        width={50}
      />
    </div>
  );
}
