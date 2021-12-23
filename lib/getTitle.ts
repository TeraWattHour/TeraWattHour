export default function getTitle(title?: string) {
  return [title, "TeraWattHour"].filter(Boolean).join(" | ");
}
