import { ArrowSquareOut, GithubLogo } from '@phosphor-icons/react';
import Head from 'next/head';
import { InstantSearch } from 'react-instantsearch';

import {
  AirportTypeControl,
  ElevationControl,
  Map,
  ScheduledServiceControl,
  SearchControl,
  SearchStats,
} from '@/components';
import typesense from '@/lib/typesense';

export default function Home() {
  return (
    <>
      <Head>
        <title>Airports Search with Typesense</title>
      </Head>
      <InstantSearch searchClient={typesense.searchClient} indexName="airports">
        <div className="flex flex-col w-screen h-screen antialiased">
          <div className="bg-white shadow relative z-10 divide-y">
            <div className="flex px-4 md:px-6 py-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                <h1 className="text-2xl font-serif font-black">
                  Airports Search
                </h1>

                <div className="inline-flex gap-1.5 items-center text-xs md:text-sm">
                  Powered by
                  <a href="https://typesense.org" target="_blank">
                    <img src="/images/typesense.svg" className="h-4 md:h-5" />
                  </a>
                </div>
              </div>

              <div className="hidden md:flex items-center gap-2 ml-auto">
                <a
                  href="#"
                  target="_blank"
                  className="btn-secondary px-4 py-2 text-sm"
                >
                  About
                  <ArrowSquareOut weight="bold" className="w-4 h-4 -mt-0.5" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="btn-secondary px-4 py-2 text-sm"
                >
                  Source Code
                  <GithubLogo weight="bold" className="w-4 h-4" />
                </a>
              </div>

              <div className="flex md:hidden flex-col justify-center items-end gap-2 ml-auto">
                <a
                  href="#"
                  target="_blank"
                  className="text-sm underline text-gray-900 transition-colors hover:text-gray-600"
                >
                  About
                </a>
                <a
                  href="#"
                  target="_blank"
                  className="text-sm underline text-gray-900 transition-colors hover:text-gray-600"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="grid grid-cols-[1fr,auto] lg:grid-cols-[1fr,1fr,1fr,auto]">
              <div className="col-span-2 lg:col-auto border-b lg:border-b-0">
                <SearchControl />
              </div>
              <div className="order-1 lg:order-none lg:border-l">
                <AirportTypeControl />
              </div>
              <div className="order-2 lg:order-none col-span-2 lg:col-auto border-t lg:border-t-0 lg:border-l">
                <ElevationControl />
              </div>
              <div className="order-1 lg:order-none border-l">
                <ScheduledServiceControl />
              </div>
            </div>
            <SearchStats />
          </div>
          <Map />
        </div>
      </InstantSearch>
    </>
  );
}
