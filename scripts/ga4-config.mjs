// Single source for the prerendered tag and the Vite client bundle.
// An explicitly empty GA4_ID disables both; an absent value uses this site's stream.
export const DEFAULT_GA4_ID = "G-B8P4D8WGLK";
export function resolveGa4Id(env = process.env) {
  const id = Object.hasOwn(env, "GA4_ID") ? env.GA4_ID : DEFAULT_GA4_ID;
  if (typeof id !== "string" || (id !== "" && !/^G-[A-Z0-9]+$/.test(id))) {
    throw new Error("GA4_ID must be empty or a valid GA4 measurement ID (G-...)");
  }
  return id;
}
