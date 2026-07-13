import { notFound } from "next/navigation";

import {
  AVAILABLE_CONTENT_OPTIONS,
  FIXTURES,
} from "@/app/(app)/(typeset)/lib/fixtures";
import { CHAT_QUESTION } from "@/app/(app)/(typeset)/lib/fixtures/chat";
import { TypesetFixture } from "@/app/(view)/preview/typeset/fixture-renderer";

export const dynamicParams = false;

export function generateStaticParams() {
  return AVAILABLE_CONTENT_OPTIONS.map((option) => ({ name: option.value }));
}

export default async function TypesetFixturePage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  if (!AVAILABLE_CONTENT_OPTIONS.some((option) => option.value === name)) {
    notFound();
  }

  return (
    <TypesetFixture
      chatQuestion={name === "chat" ? CHAT_QUESTION : undefined}
      html={FIXTURES[name as keyof typeof FIXTURES]}
    />
  );
}
