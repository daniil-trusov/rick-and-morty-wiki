import React from "react";
import { notFound } from "next/navigation";

import { getPageWithFiltersBySlug } from "@/app/lib/config";
import { parseSearchParams } from "@/utils/functions";

import Loader from "@/components/Loader/Loader";
import ControlsPanel from "@/components/ControlsPanel/ControlsPanel";
import ResourceGridWrapper from "@/components/CardGrid/ResourceGridWrapper";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function ResourcePage({ params, searchParams }: Props) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const pageWithFilters = getPageWithFiltersBySlug(slug);

  if (!pageWithFilters) {
    return notFound();
  }

  const { page, filters } = pageWithFilters;
  const { search, selectedFilters } = parseSearchParams(resolvedSearchParams);

  return (
    <>
      <h1 className="mb-6 text-center text-2xl font-bold">{page.title}</h1>

      <div className="lg:flex-rowmx-auto mx-auto flex min-h-screen max-w-7xl flex-col items-stretch gap-6 px-4 sm:px-6 lg:flex-row">
        <div className="h-full w-full lg:w-1/4">
          <ControlsPanel
            filters={filters}
            initialSearch={search}
            initialFilters={selectedFilters}
          />
        </div>

        <div className="h-full w-full lg:w-3/4">
          <React.Suspense fallback={<Loader />}>
            <ResourceGridWrapper
              resourceType={page.resourceType}
              searchParams={resolvedSearchParams}
            />
          </React.Suspense>
        </div>
      </div>
    </>
  );
}
