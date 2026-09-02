import { CommandBox } from "@/components/command-box";
import { HomeCtas } from "@/components/home-ctas";
import { HomeDescription } from "@/components/home-description";
import { PageTransition } from "@/components/page-transition";
import { ROUTES } from "@/constants/routes";
import { BreadcrumbJsonLd } from "@/seo/json-ld";

import { CardsDemo } from "./cards";

export const dynamic = "force-static";
export const revalidate = false;

export default function IndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: ROUTES.HOME }]} />
      <PageTransition>
        <section className="container-wrapper md:**:[.container]:pb-8 lg:**:[.container]:pb-12">
          <div className="container flex flex-col items-center gap-4 py-8 text-center md:py-16 lg:py-20">
            <h1 className="from-foreground via-foreground to-foreground/65 bg-linear-to-b bg-clip-text text-transparent leading-tighter text-3xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter max-w-4xl">
              The Foundation for your Design System
            </h1>

            <HomeDescription />

            <CommandBox className="mt-4 w-full max-w-xl" />

            <HomeCtas className="mt-4" />
          </div>
        </section>

        <section>
          <CardsDemo />
        </section>
      </PageTransition>
    </>
  );
}
