import { pageConfig } from "@/configs/pageConfig";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(pageConfig[0].path);
}
