import { notFound, redirect } from "next/navigation";
import pageSchema from "./data/pageSchema.json";

export default function HomePage() {
  const firstSlug = pageSchema[0]?.slug;

  if (!firstSlug) {
    return notFound();
  }

  redirect(firstSlug);
}
