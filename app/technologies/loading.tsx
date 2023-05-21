import Image from 'next/image';
import LoadingSpinner from '@/public/assets/svgs/loading-loop.svg';
import { ClipLoader } from 'react-spinners';
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex justify-center align-middle min-h-screen">
      <Image
        src={LoadingSpinner}
        title="Loading"
        alt=""
        height={50}
        width={50}
      />
    </div>
  );
}
