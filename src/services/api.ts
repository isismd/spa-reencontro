const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function toQuery(params: Record<string, any>) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    search.append(k, String(v));
  });
  return search.toString();
}

export async function httpGet<T>(
  path: string,
  query?: Record<string, any>,
): Promise<T> {
  const qs = query ? `?${toQuery(query)}` : "";
  const res = await fetch(`${BASE_URL}${path}${qs}`, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`HTTP ${res.status} - ${text || res.statusText}`);
  }
  return res.json() as Promise<T>;
}
