/** Cypress Bible Church — Pushpay online giving (https://pushpay.com/g/cypressbible). */

export const PUSHPAY_GIVING_HANDLE = "cypressbible";

/** Public giving page (full experience on Pushpay). */
export const PUSHPAY_GIVING_URL = `https://pushpay.com/g/${PUSHPAY_GIVING_HANDLE}`;

/**
 * Optional widget giving code from Pushpay admin (Embedded Giving).
 * Leave empty to use handle-only embed; add `wgc` if Pushpay provides one for your site.
 */
export const PUSHPAY_EMBEDDED_WGC = "";

/** Branding hero from Pushpay merchant settings. */
export const PUSHPAY_HERO_IMAGE_URL =
  "https://d3r30t51yqsxga.cloudfront.net/ECG-138140/47732d3b2e2e459eb55f0844799c3309/original";

export const PUSHPAY_PRIMARY_COLOR = "#4e7287";

/** Engiven widgets (stock & crypto) configured on the Pushpay merchant. */
export const PUSHPAY_CRYPTO_URL = "https://platform.engiven.com/give/14473/widget/26596";
export const PUSHPAY_STOCK_URL = "https://platform.engiven.com/give/14473/widget/26597";
