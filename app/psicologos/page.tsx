import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PsicologosPageBody } from "@/components/pages/PsicologosPageBody";
import { psicologosContent } from "@/content/audiences";

export const metadata: Metadata = buildPageMetadata(psicologosContent.seo);

export default function PsicologosPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Psicólogos" }]} />
      <PsicologosPageBody />
    </>
  );
}
