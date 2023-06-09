import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="container mx-auto py-1 fixed bottom-0 ">
        <p className="text-xs text-center w-full">
          Designed and Coded by
          <Link
            className="font-bold text-sm"
            href="/contact"
            rel="noreferrer noopener"
          >
            {' '}
            Anmol Singh{' '}
          </Link>
          with
          <span className="text-gradient text-sm font-bold"> Love</span> &
          <span className="text-gradient text-sm font-bold"> Coffee</span>
        </p>
      </footer>
    </>
  );
}
