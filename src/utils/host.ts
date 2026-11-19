export const isAdminHost = (): boolean => {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname.toLowerCase();
  return host === "admin.yasirsubhani.tech" || host.startsWith("admin.");
};

export const isLocalAdminDev = (): boolean => {
  if (typeof window === "undefined") return false;
  const { hostname, search } = window.location;
  return hostname === "localhost" && search.includes("admin=1");
};

export const isAdminApp = (): boolean => isAdminHost() || isLocalAdminDev();

export const cookieDomain = (): string | undefined => {
  if (typeof window === "undefined") return undefined;
  const host = window.location.hostname.toLowerCase();
  if (host.endsWith("yasirsubhani.tech")) return ".yasirsubhani.tech";
  return undefined;
};
