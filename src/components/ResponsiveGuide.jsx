import Section from "./common/Section";
import Table from "./common/Table";

const corePoints = [
  {
    title: "Mobile-first",
    text: "Start with small-screen styles, then add sm:, md:, lg: overrides. Desktop-first often causes layout bugs.",
  },
  {
    title: "Fluid over fixed",
    text: "Prefer flex, grid, %, and clamp() over many fixed pixel layouts.",
  },
  {
    title: "Content dictates breakpoints",
    text: "Do not target specific devices. Add a breakpoint when the content becomes cramped or too loose.",
  },
  {
    title: "Test the edges",
    text: "Check just before and after breakpoints, such as 767px and 768px.",
  },
];

const unitRows = [
  [
    "rem",
    "Font sizes, spacing, and radii. Good default; respects zoom/accessibility.",
  ],
  ["em", "Spacing that should scale with its own element's font size."],
  ["px", "Borders, shadows, and hairlines that should stay fixed."],
  ["%", "Widths relative to the parent container."],
  ["vw / vh", "Viewport-sized sections. Avoid using them alone for font size."],
  ["min() / max() / clamp()", "Fluid values with safe minimums and maximums."],
  ["fr", "Grid tracks that share remaining space proportionally."],
];

const typographyRows = [
  ["Body text", "16px (1rem) minimum for readability."],
  ["Small text", "14px (0.875rem) minimum for real content."],
  ["H1", "24–28px mobile, ~32–48px desktop; use clamp()."],
  ["H2 / H3", "~20–28px; scale with the viewport."],
  ["Line height", "1.4–1.6 body; ~1.1–1.3 headings."],
  ["Line length", "45–75 characters per line; use max-width."],
];

const layoutPoints = [
  {
    title: "Flexbox vs Grid",
    text: "Use Flexbox for 1D layouts; Grid for 2D layouts.",
  },
  {
    title: "Container width",
    text: "Prefer max-width over fixed width so layouts shrink but do not stretch forever.",
  },
  {
    title: "Spacing",
    text: "Use a consistent scale such as Tailwind's 4px/8px system.",
  },
  {
    title: "Height",
    text: "Avoid fixed height for text containers. Prefer min-height.",
  },
  {
    title: "Wide content",
    text: "Wrap tables and code blocks with overflow-x-auto.",
  },
];

const mediaPoints = [
  {
    title: "Responsive images",
    text: "Use max-width: 100% and height: auto to prevent overflow.",
  },
  {
    title: "object-fit",
    text: "Use object-fit: cover when images must fill a fixed-ratio box.",
  },
  {
    title: "Image sizes",
    text: "Use srcset/sizes or an Image component so mobile avoids desktop-sized files.",
  },
  {
    title: "Layout shift",
    text: "Reserve image/embed space with aspect-ratio.",
  },
];

const accessibilityPoints = [
  {
    title: "Touch targets",
    text: "Use at least 44×44px (Apple) or 48×48px (Material).",
  },
  {
    title: "Target spacing",
    text: "Leave enough space between tap targets to prevent mis-taps.",
  },
  {
    title: "Hover",
    text: "Never rely only on :hover for important content.",
  },
  {
    title: "Keyboard focus",
    text: "Keep visible focus styles; do not remove outline without a replacement.",
  },
  {
    title: "Motion",
    text: "Respect prefers-reduced-motion.",
  },
];

const breakpointPoints = [
  {
    title: "Common ranges",
    text: "~640px phones, ~768px tablets, ~1024px laptops, ~1280–1536px desktops.",
  },
  {
    title: "Keep them limited",
    text: "Usually 3–4 breakpoints are enough. Too many increase maintenance.",
  },
  {
    title: "Design extremes",
    text: "Design the smallest phone and largest desktop first; middle sizes usually follow.",
  },
];

const checklistPoints = [
  "Works at 320px without horizontal scrolling.",
  "Body text is at least 16px.",
  "Touch targets are at least 44px.",
  "Images and tables overflow without breaking layout.",
  "Browser resizing was tested continuously.",
  "200% zoom keeps text readable and usable.",
];

function BulletList({ items }) {
  return (
    <ul className="text-white list-disc list-inside space-y-1 mt-2">
      {items.map((item) => (
        <li key={item.title ?? item}>
          {typeof item === "string" ? (
            item
          ) : (
            <>
              <b>{item.title}:</b> {item.text}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function ResponsiveGuide() {
  return (
    <div className="pages !outline-none !outline-t-0">
      <h1 className="pages-tittle text-center">Responsive Design</h1>
      <p className="text-white max-w-2xl text-center">
        A concise guide to choosing units, layouts, breakpoints, media rules,
        and accessibility practices.
      </p>

      <Section id="core" title="Core">
        <BulletList items={corePoints} />
      </Section>

      <Section id="units" title="Units — What & When">
        <Table headers={["Unit", "Use it for"]} rows={unitRows} />

        <p className="text-white text-sm">
          <b>Rule:</b> rem for type/spacing, %/fr for layout, px for fixed
          details, clamp() for fluid scaling.
        </p>
      </Section>

      <Section id="typography" title="Typography Sizing">
        <Table
          headers={["Element", "Safe general-purpose size"]}
          rows={typographyRows}
        />
      </Section>

      <Section id="layout" title="Layout & Spacing">
        <BulletList items={layoutPoints} />
      </Section>

      <Section id="media" title="Images & Media">
        <BulletList items={mediaPoints} />
      </Section>

      <Section id="accessibility" title="Touch Targets & Accessibility">
        <BulletList items={accessibilityPoints} />
      </Section>

      <Section id="breakpoints" title="Breakpoints — General Guidance">
        <BulletList items={breakpointPoints} />
      </Section>

      <Section id="checklist" title="Quick Checklist Before Shipping">
        <BulletList items={checklistPoints} />
      </Section>
    </div>
  );
}

export default ResponsiveGuide;
