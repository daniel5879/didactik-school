import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CategoryGrid } from "@/components/shared/CategoryGrid";
import { categoriesSection } from "@/content/categories";

export function CategoriesSection() {
  return (
    <section id="categorias" className="bg-surface py-24 lg:py-32">
      <Container>
        <SectionTitle
          title={categoriesSection.title}
          subtitle={categoriesSection.subtitle}
        />
        <div className="mt-14">
          <CategoryGrid items={categoriesSection.items} />
        </div>
      </Container>
    </section>
  );
}
