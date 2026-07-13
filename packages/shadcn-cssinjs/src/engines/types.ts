import type { z } from "zod";

import type { engineSchema } from "@/src/schema";
import type { ProjectInfo } from "@/src/utils/get-project-info";

export type Engine = z.infer<typeof engineSchema>;

export interface EngineContext {
  cwd: string;
  force: boolean;
  project: ProjectInfo;
  silent: boolean;
  globalCss?: string;
}

export interface EngineAdapter {
  id: Engine;
  label: string;
  setup(context: EngineContext): Promise<EngineSetupResult>;
}

export interface EngineSetupResult {
  aliasPrefix: string;
  globalCss: string;
}
