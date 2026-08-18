import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const svgUtilities = [
  [
    "fill-current / fill-red-500",
    "fill",
    "Set the inside color of an SVG shape.",
  ],
  [
    "stroke-current / stroke-blue-500",
    "stroke",
    "Set the outline color of an SVG shape.",
  ],
  ["stroke-2", "stroke-width", "Set the width of an SVG stroke."],
];

const accessibilityUtilities = [
  [
    "forced-color-adjust-none / forced-color-adjust-auto",
    "forced-color-adjust",
    "Control whether forced-color modes can override the element's colors.",
  ],
  [
    "sr-only",
    "accessibility helper",
    "Hide content visually while keeping it available to screen readers.",
  ],
  [
    "not-sr-only",
    "accessibility helper",
    "Restore normal visual display after sr-only.",
  ],
];

function Advanced() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">
        SVG, Accessibility & Advanced Variants
      </h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Useful utilities and advanced patterns for SVG icons, accessibility,
        state variants, media conditions, configuration, and real components.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="svg" title="SVG">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={svgUtilities} />

          <CodeBlock>{`<svg
  className="w-6 h-6 fill-none stroke-current stroke-2 text-gray-700"
  viewBox="0 0 24 24"
>
  <path d="M4 6h16M4 12h16M4 18h16" />
</svg>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">fill-current</code> and{" "}
            <code className="text-pink-300">stroke-current</code> inherit the
            element's current text color. Change{" "}
            <code className="text-pink-300">text-*</code> to recolor the icon.
          </Note>
        </Section>

        <Section id="accessibility" title="Accessibility">
          <Table
            headers={["Utility", "CSS / Role", "Use"]}
            rows={accessibilityUtilities}
          />

          <CodeBlock>{`<button>
  <svg className="w-5 h-5" aria-hidden="true">
    ...
  </svg>

  <span className="sr-only">
    Close menu
  </span>
</button>`}</CodeBlock>

          <p>
            <code className="text-pink-300">sr-only</code> hides content
            visually but keeps it available to assistive technology.
          </p>

          <Note>
            Use <code className="text-pink-300">not-sr-only</code> when the
            content needs to become visible again, such as a focused skip link.
          </Note>
        </Section>

        <Section id="state-variants" title="Advanced State Variants">
          <p>
            Tailwind can style an element from conditions involving its
            children, attributes, or the absence of a state.
          </p>

          <CodeBlock>{`<label className="has-checked:bg-blue-50 border rounded p-3">
  <input type="checkbox" />
  Option
</label>

<p className="not-first:mt-4">
  Spacing on every paragraph except the first.
</p>

<div
  data-state="open"
  className="data-[state=open]:block hidden"
>
  Panel
</div>

<button
  aria-pressed="true"
  className="aria-pressed:bg-blue-600"
>
  Toggle
</button>`}</CodeBlock>

          <Table
            headers={["Variant", "Idea"]}
            rows={[
              ["has-*", "Style an element based on something inside it."],
              ["not-*", "Apply a utility when the condition is not true."],
              ["data-*", "Style from a data attribute value."],
              ["aria-*", "Style from an ARIA attribute state."],
            ]}
          />
        </Section>

        <Section id="media-variants" title="Environment & Media Variants">
          <p>
            These variants let styles respond to user preferences, printing,
            browser support, and input hardware.
          </p>

          <CodeBlock>{`<div className="motion-safe:animate-bounce motion-reduce:animate-none">
  Respects reduced-motion settings
</div>

<div className="print:hidden">
  Not printed
</div>

<div className="supports-[gap]:flex">
  Uses flex only when gap is supported
</div>

<div className="pointer-coarse:p-4">
  Larger touch target on touch devices
</div>`}</CodeBlock>
        </Section>

        <Section id="arbitrary-variants" title="Arbitrary Variants">
          <p>
            Build a selector directly inside square brackets when the built-in
            variants are not specific enough.
          </p>

          <CodeBlock>{`<div className="[&>p]:mt-2 [&:nth-child(3)]:hidden">
  <p>Direct child</p>
  <p>Direct child</p>
  <p>Third child is hidden</p>
</div>`}</CodeBlock>

          <Note>
            The <code className="text-pink-300">&amp;</code> represents the
            current element inside the selector.
          </Note>
        </Section>

        <Section id="config-v3-v4" title="Tailwind v3 vs v4 Configuration">
          <p>
            Tailwind v3 commonly uses a JavaScript config file. Tailwind v4
            moves theme customization into CSS.
          </p>

          <CodeBlock>{`// v3: tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#7c3aed",
      },
    },
  },
}`}</CodeBlock>

          <CodeBlock>{`/* v4: directly in CSS */
@import "tailwindcss";

@theme {
  --color-brand: #7c3aed;
}`}</CodeBlock>

          <Note>
            For a v4 project, the CSS-based{" "}
            <code className="text-pink-300">@theme</code> approach is the
            relevant pattern.
          </Note>
        </Section>

        <Section id="real-component" title="Putting It Together">
          <p>
            A real component combines many utilities rather than relying on one
            class at a time.
          </p>

          <CodeBlock>{`<div
  className="
    group max-w-sm mx-auto rounded-2xl bg-white dark:bg-gray-800
    shadow-md hover:shadow-xl transition-shadow duration-300
    overflow-hidden
  "
>
  <img
    className="
      w-full h-48 object-cover
      group-hover:scale-105 transition-transform duration-500
    "
    src="cover.jpg"
    alt="Cover"
  />

  <div className="p-5">
    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
      Card Title
    </h3>

    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
      Short description that stays within two lines.
    </p>

    <button
      className="
        mt-4 w-full rounded-lg bg-blue-600 py-2
        text-white font-medium
        hover:bg-blue-700 active:scale-95 transition
        focus:outline-none focus:ring-2
        focus:ring-blue-400 focus:ring-offset-2
      "
    >
      View Details
    </button>
  </div>
</div>`}</CodeBlock>

          <Table
            headers={["Concept", "Used here"]}
            rows={[
              ["group", "Lets the image react to the card hover."],
              ["Responsive sizing", "max-w-sm and w-full."],
              ["Dark mode", "dark:* utilities."],
              ["Shadow + transition", "Smooth elevation change."],
              ["Overflow", "Keeps scaled image inside the card."],
              ["Typography", "Size, weight, color, and line clamp."],
              ["Interaction", "hover, active, focus, and ring."],
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

export default Advanced;
