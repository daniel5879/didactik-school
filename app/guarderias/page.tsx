import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { GuarderiasPageBody } from "@/components/pages/GuarderiasPageBody";
import { guarderiasContent } from "@/content/audiences";

export const metadata: Metadata = buildPageMetadata(guarderiasContent.seo);

export default function GuarderiasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Guarderías" }]} />
      <GuarderiasPageBody />
    </>
  );
}
