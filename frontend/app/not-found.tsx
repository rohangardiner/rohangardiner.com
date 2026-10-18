import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 gap-4 items-center justify-center">
      <Image src="/ponderorb.jpg" loading="eager" alt="wizard" width={500} height={180} />
      This is not what you are looking for.
    </div>
  );
}
