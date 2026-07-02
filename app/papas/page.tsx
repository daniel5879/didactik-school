import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PapasPageBody } from "@/components/pages/PapasPageBody";
import { papasContent } from "@/content/audiences";

export const metadata: Metadata = buildPageMetadata(papasContent.seo);

export default function PapasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Papás" }]} />
      <PapasPageBody />
    </>
  );
}
