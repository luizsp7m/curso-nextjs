import Head from "next/head";
import { Fragment, ReactNode } from "react";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export function Layout({ title, children }: LayoutProps) {
  return (
    <Fragment>
      <Head>
        <title>Aprendendo Tailwind - {title}</title>
      </Head>

      <div className="h-screen bg-gray-900 flex justify-center items-center">
        <div className="container max-w-6xl text-gray-200 text-base flex flex-col gap-6">
          {children}
        </div>
      </div>
    </Fragment>
  );
}