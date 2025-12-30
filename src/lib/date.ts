export function formatDate(date: Date | number): string {
  const d = date instanceof Date ? date : new Date(date);
  if (isNaN(d.getTime())) return "";

  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(d);

  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(d);

  return `${datePart} ${timePart}`;
}

// ✅ Date → API / URL (YYYY-MM-DD)
export function toApiDate(date?: Date | null): string | null {
  if (!date) return null;

  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");

  return `${yyyy}-${mm}-${dd}`;
}

// ✅ API / URL → Date (DatePicker-safe, NO timezone bug)
export function fromApiDate(value?: string | null): Date | undefined {
  if (!value) return undefined;

  const [y, m, d] = value.split("-").map(Number);
  if (!y || !m || !d) return undefined;

  return new Date(y, m - 1, d);
}
