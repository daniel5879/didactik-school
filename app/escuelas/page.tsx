import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { EscuelasPageBody } from "@/components/pages/EscuelasPageBody";
import { escuelasContent } from "@/content/audiences";

export const metadata: Metadata = buildPageMetadata(escuelasContent.seo);

export default function EscuelasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Escuelas" }]} />
      <EscuelasPageBody />
    </>
  );
}
