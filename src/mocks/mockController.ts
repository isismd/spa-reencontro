let enabled = false;

export function isMockEnabled() {
  return enabled || localStorage.getItem("use_mocks") === "true";
}

export async function enableMocks() {
  const { apiMock } = await import("./apiMock");
  apiMock();
  enabled = true;
  localStorage.setItem("use_mocks", "true");
  window.dispatchEvent(new CustomEvent("mock:changed", { detail: true }));
}

export function disableMocks() {
  enabled = false;
  localStorage.removeItem("use_mocks");
  window.dispatchEvent(new CustomEvent("mock:changed", { detail: false }));
  window.location.reload();
}
