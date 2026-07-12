import { createCss } from "@tokenami/css";

import config from "@/.tokenami/tokenami.config";

/**
 * Configured Tokenami `css` helper for the Tokenami component base.
 *
 * `escapeSpecialChars` is disabled so React (which already escapes inline style
 * values) doesn't double-escape arbitrary values.
 */
export const css = createCss(config, { escapeSpecialChars: false });
