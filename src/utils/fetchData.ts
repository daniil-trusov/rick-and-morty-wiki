import { ResourceType } from "./types";

const BASE_URL = "https://rickandmortyapi.com/api/";

export type ApiResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};

export type FetchResult<T> = {
  data: ApiResponse<T> | null;
  notFound: boolean;
  error: Error | null;
};

export async function fetchEntity<T>(
  resourceType: ResourceType,
  searchParams: Record<string, string>
): Promise<FetchResult<T>> {
  const query = new URLSearchParams(searchParams).toString();
  const url = `${BASE_URL}/${resourceType}/?${query}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) {
        return { data: null, notFound: true, error: null };
      }
      throw new Error(`API error: ${res.status}`);
    }

    const data: ApiResponse<T> = await res.json();

    return { data, notFound: false, error: null };
  } catch (err) {
    console.error("Fetch error:", err);
    return {
      data: null,
      notFound: false,
      error: err instanceof Error ? err : new Error("Unknown error"),
    };
  }
}
