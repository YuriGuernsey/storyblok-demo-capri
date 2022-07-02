export function dashify(value?: string) {
  if (typeof value === "undefined") {
    return "undefined";
  }
  const dashified = value
    .toString()
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase()
    .replace(/[ _]/g, "-");

  return `blok-${dashified}`;
}

export function resize(image: string | undefined, size: string) {
  if (typeof image !== "undefined") {
    return (
      "//img2.storyblok.com/" + size + image.replace("//a.storyblok.com", "")
    );
  }
  return null;
}

export function resolveUrl(href: string) {
  if (/^\/?home\/?$/.test(href)) return "/";
  if (/^https?:/.test(href)) return href;
  if (/^[/#?]/.test(href)) return href;
  return `/${href}`;
}
