import { usePathname } from "next/navigation";
import { getPageByPathname } from "@/utils/pageUtils";
import { Page } from "@/utils/types";

export const usePage = (): Page => {
  const pathname = usePathname();
  return getPageByPathname(pathname);
};
