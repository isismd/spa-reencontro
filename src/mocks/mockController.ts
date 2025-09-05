let enabled = false;

export function isMockEnabled() {
  return enabled || localStorage.getItem("use_mocks") === "true";
}

export async function enableMocks() {
  const { apiMock } = await import("./apiMock");
  apiMock();
  enabled = true;
  localStorage.setItem("use_mocks", "true");
}

export function disableMocks() {
  enabled = false;
  localStorage.removeItem("use_mocks");
}
