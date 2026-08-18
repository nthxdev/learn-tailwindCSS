import { useState } from "react";

function CodeBlock({ children }) {
  return (
    <pre className="w-full overflow-x-auto rounded-lg bg-black/60 border border-white/10 p-4 text-sm text-green-300 font-mono">
      <code>{children}</code>
    </pre>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="w-full max-w-4xl mt-16 first:mt-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-white/20 pb-3 mb-6">
        {title}
      </h2>
      <div className="flex flex-col gap-4 text-white/90 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function Table({ headers, rows }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[420px] text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_td]:border-white/40 [&_th]:p-2 [&_td]:p-2">
        <thead className="bg-white/10">
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        
        <tbody>
            {rows.map((row, i)=>(
                <tr key={i} className="odd:bg-white/[0.03]">
                    {row.map((cell, j)=>(
                        <td key={j}>{cell}</td>
                    ))}
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function Note({ children }) {
  return (
    <div className="border-l-4 border-yellow-400 bg-yellow-400/10 px-4 py-3 rounded-r-md text-sm text-yellow-100">
      {children}
    </div>
  );
}

/* ---------- data used by the tables below (kept as data, not hardcoded rows, on purpose — easier to scan and edit) ---------- */



const fontSizeScale = [
  ["text-xs", "0.75rem / 12px", "1rem / 16px"],
  ["text-sm", "0.875rem / 14px", "1.25rem / 20px"],
  ["text-base", "1rem / 16px", "1.5rem / 24px"],
  ["text-lg", "1.125rem / 18px", "1.75rem / 28px"],
  ["text-xl", "1.25rem / 20px", "1.75rem / 28px"],
  ["text-2xl", "1.5rem / 24px", "2rem / 32px"],
  ["text-3xl", "1.875rem / 30px", "2.25rem / 36px"],
  ["text-4xl", "2.25rem / 36px", "2.5rem / 40px"],
  ["text-5xl", "3rem / 48px", "1 (no extra leading)"],
  ["text-6xl", "3.75rem / 60px", "1"],
  ["text-7xl", "4.5rem / 72px", "1"],
  ["text-8xl", "6rem / 96px", "1"],
  ["text-9xl", "8rem / 128px", "1"],
];

const fontWeightScale = [
  ["font-thin", "100"],
  ["font-extralight", "200"],
  ["font-light", "300"],
  ["font-normal", "400"],
  ["font-medium", "500"],
  ["font-semibold", "600"],
  ["font-bold", "700"],
  ["font-extrabold", "800"],
  ["font-black", "900"],
];

const lineHeightScale = [
  ["leading-none", "1"],
  ["leading-tight", "1.25"],
  ["leading-snug", "1.375"],
  ["leading-normal", "1.5"],
  ["leading-relaxed", "1.625"],
  ["leading-loose", "2"],
];

const trackingScale = [
  ["tracking-tighter", "-0.05em"],
  ["tracking-tight", "-0.025em"],
  ["tracking-normal", "0em"],
  ["tracking-wide", "0.025em"],
  ["tracking-wider", "0.05em"],
  ["tracking-widest", "0.1em"],
];

const radiusScale = [
  ["rounded-none", "0px"],
  ["rounded-sm", "0.125rem / 2px"],
  ["rounded", "0.25rem / 4px"],
  ["rounded-md", "0.375rem / 6px"],
  ["rounded-lg", "0.5rem / 8px"],
  ["rounded-xl", "0.75rem / 12px"],
  ["rounded-2xl", "1rem / 16px"],
  ["rounded-3xl", "1.5rem / 24px"],
  ["rounded-full", "9999px (pill / circle)"],
];

const breakpointScale = [
  ["sm", "40rem", "640px"],
  ["md", "48rem", "768px"],
  ["lg", "64rem", "1024px"],
  ["xl", "80rem", "1280px"],
  ["2xl", "96rem", "1536px"],
];

const sizingKeywords = [
  ["w-full / h-full", "100%", "fill the parent"],
  [
    "w-screen",
    "100vw",
    "full viewport width (can cause overflow with scrollbars — prefer w-full usually)",
  ],
  [
    "h-screen",
    "100vh",
    "full viewport height, fixed — content taller than this gets clipped",
  ],
  [
    "h-dvh",
    "100dvh",
    "dynamic viewport height — adjusts for mobile browser bars, usually the better choice",
  ],
  ["w-auto / h-auto", "auto", "browser decides, based on content"],
  ["w-fit / h-fit", "fit-content", "shrinks to wrap its content"],
  [
    "w-min / h-min",
    "min-content",
    "smallest possible size that still fits content without overflow",
  ],
  [
    "w-max / h-max",
    "max-content",
    "grows as wide as the content wants, ignoring the parent",
  ],
  [
    "w-1/2, w-1/3, w-2/3...",
    "percentage",
    "fraction-based widths, e.g. w-1/2 = 50%",
  ],
  [
    "size-10",
    "width: 2.5rem; height: 2.5rem;",
    "sets width AND height in one class — shorthand for w-10 h-10",
  ],
];

const colorFamilies = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];



const stateVariants = [
  ["hover:", "mouse is over the element", "hover:bg-blue-600"],
  ["focus:", "element has keyboard/click focus", "focus:ring-2"],
  [
    "focus-visible:",
    "focused via keyboard specifically (not mouse click)",
    "focus-visible:outline-2",
  ],
  ["active:", "element is being clicked/pressed", "active:scale-95"],
  ["disabled:", "element has the disabled attribute", "disabled:opacity-50"],
  ["first: / last:", "first or last child among siblings", "first:mt-0"],
  ["odd: / even:", "odd or even position among siblings", "odd:bg-white/5"],
  [
    "group-hover:",
    "a PARENT with class 'group' is hovered",
    "group-hover:text-white",
  ],
  [
    "peer-checked:",
    "a sibling with class 'peer' is checked",
    "peer-checked:block",
  ],
  [
    "has-[selector]:",
    "the element CONTAINS something matching selector",
    "has-[:checked]:bg-blue-50",
  ],
  [
    "not-hover:",
    "the negated form of any variant (not- prefix, v4)",
    "not-hover:opacity-70",
  ],
  ["dark:", "the dark theme is active", "dark:bg-black"],
];

const shadowScale = [
  ["shadow-sm", "a barely-there hairline lift, good for inputs and flat cards"],
  ["shadow", "the default — small, soft, general purpose"],
  ["shadow-md", "noticeably lifted, good for dropdowns and popovers"],
  ["shadow-lg", "clearly floating, good for modals and menus"],
  ["shadow-xl", "big soft blur, good for hero cards and hover states"],
  ["shadow-2xl", "dramatic, heavy blur — used sparingly"],
  ["shadow-inner", "the shadow points INWARD, like a pressed/recessed surface"],
  [
    "shadow-none",
    "removes any shadow — handy for overriding on hover/dark mode",
  ],
];

const durationScale = [
  ["duration-75", "75ms"],
  ["duration-150", "150ms"],
  ["duration-200", "200ms"],
  ["duration-300", "300ms"],
  ["duration-500", "500ms"],
  ["duration-700", "700ms"],
  ["duration-1000", "1000ms"],
];

const easingScale = [
  ["ease-linear", "constant speed, no acceleration"],
  ["ease-in", "starts slow, speeds up — good for elements leaving the screen"],
  [
    "ease-out",
    "starts fast, slows down — good for elements entering the screen",
  ],
  ["ease-in-out", "slow-fast-slow — the safest general-purpose default"],
];

const zIndexScale = [
  ["z-0", "0"],
  ["z-10", "10"],
  ["z-20", "20"],
  ["z-30", "30"],
  ["z-40", "40"],
  ["z-50", "50"],
  ["z-auto", "auto — no explicit stacking order, follows source order"],
];

const spacingScale = [
  ["0", "0rem", "0px"],
  ["px", "1px", "1px"],
  ["0.5", "0.125rem", "2px"],
  ["1", "0.25rem", "4px"],
  ["1.5", "0.375rem", "6px"],
  ["2", "0.5rem", "8px"],
  ["2.5", "0.625rem", "10px"],
  ["3", "0.75rem", "12px"],
  ["4", "1rem", "16px"],
  ["5", "1.25rem", "20px"],
  ["6", "1.5rem", "24px"],
  ["8", "2rem", "32px"],
  ["10", "2.5rem", "40px"],
  ["12", "3rem", "48px"],
  ["16", "4rem", "64px"],
  ["20", "5rem", "80px"],
  ["24", "6rem", "96px"],
  ["32", "8rem", "128px"],
  ["40", "10rem", "160px"],
  ["48", "12rem", "192px"],
  ["64", "16rem", "256px"],
  ["96", "24rem", "384px"],
];

// Real hex values for Tailwind's default "blue" ramp, used to render an actual visual scale
const blueRamp = [
  ["50", "#eff6ff"],
  ["100", "#dbeafe"],
  ["200", "#bfdbfe"],
  ["300", "#93c5fd"],
  ["400", "#60a5fa"],
  ["500", "#3b82f6"],
  ["600", "#2563eb"],
  ["700", "#1d4ed8"],
  ["800", "#1e40af"],
  ["900", "#1e3a8a"],
  ["950", "#172554"],
];


function Basics() {
  const [previewToken, setPreviewToken] = useState("4");
  const [shadowToken, setShadowToken] = useState("shadow-md");

  const [previousRem, previousPx] =
//  [token] is array destructuring. ->  [token] = ["4", "1rem", "16px"] -> means token = "4"
// if write like this - find((token) => ...) then token receives the entire sub-array, not its first value.
  spacingScale.find(([token]) => token === previewToken)?.slice(1) ?? ["1rem", "16px"];

  const shadowMap = {
    "shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    "shadow-md":
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    "shadow-lg":
      "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "shadow-xl":
      "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "shadow-2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    "shadow-inner": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    "shadow-none": "none",
  };

  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Tailwind CSS Basics</h1>
      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        The utility classes themselves — assuming you already know what padding,
        flexbox, and a media query are. If any of that sounds shaky, read the
        Fundamentals first.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="what-is-tailwind" title="What Tailwind Actually Is">
          <p>
            Normal CSS : you write a class name in your markup, then switch to a{" "}
            <code className="text-pink-300">.css</code> file and write the
            actual styles there. Inline styles skip the file, but lose the
            cascade — no hover states, no media queries, no reuse.
          </p>
          <CodeBlock>{`/* old way — style.css */
.btn {
  background: blue;
  padding: 8px 16px;
  border-radius: 6px;
}`}</CodeBlock>
          <CodeBlock>{`<!-- old way — index.html -->
<button class="btn">Click</button>`}</CodeBlock>
          <p>
            Tailwind flips this: almost every small CSS rule already has a
            ready-made class name, generated on demand. You attach classes
            straight onto the tag — no switching files, and unlike inline
            styles, these classes still compile down to real CSS rules, so 
            <code className="text-pink-300">hover:</code>, 
            <code className="text-pink-300">md:</code>, and 
            <code className="text-pink-300">dark:</code> all keep working.
          </p>
          <CodeBlock>{`<button class="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">
  Click
</button>`}</CodeBlock>
          <Table
            headers={["Class", "What it compiles to"]}
            rows={[
              ["bg-blue-500", "background-color: #3b82f6;"],
              ["px-4", "padding-left: 1rem; padding-right: 1rem;"],
              ["py-2", "padding-top: 0.5rem; padding-bottom: 0.5rem;"],
              ["rounded-md", "border-radius: 0.375rem;"],
              [
                "hover:bg-blue-600",
                ".this:hover { background-color: #2563eb; }",
              ],
            ]}
          />
          <p>
            This is called <b>utility-first</b>: one class does one small job.
            You combine many small classes to build one look. Tailwind's build
            step scans your markup, finds every class name you actually used,
            and generates only the CSS for those — nothing you don't use ships
            to the browser, no matter how large the full utility set is.
          </p>
          <p>
            Naming pattern you'll see everywhere:{" "}
            <code className="text-pink-300">{"{property}-{value}"}</code> — e.g.{" "}
            <code className="text-pink-300">text-lg</code>,{" "}
            <code className="text-pink-300">mt-4</code>,{" "}
            <code className="text-pink-300">rounded-full</code>,{" "}
            <code className="text-pink-300">justify-center</code>. Property
            first, size/value second. Everything below is "what classes exist"
            plus a handful of superpowers stacked on top: responsive prefixes,
            state prefixes, dark mode, and arbitrary values.
          </p>
        </Section>

        {/* ---------------- SETUP ---------------- */}
        <Section id="setup" title="Setting Up Tailwind (v4)">
          <p>
            Tailwind v4 removed the old required config file. Setup is three
            lines, using whichever build tool plugin matches your stack (Vite,
            PostCSS, the standalone CLI, and Webpack all have one):
          </p>
          <CodeBlock>{`npm install tailwindcss @tailwindcss/vite
# or: npm install tailwindcss @tailwindcss/postcss
# or: npm install tailwindcss @tailwindcss/cli`}</CodeBlock>
          <CodeBlock>{`/* your main .css file */
@import "tailwindcss";`}</CodeBlock>
          <p>
            That's the whole setup — no{" "}
            <code className="text-pink-300">tailwind.config.js</code> is
            required to get started. Older v3 projects used that JS config file
            for customizing themes, content paths, and plugins; v4 does the same
            customization directly inside CSS with{" "}
            <code className="text-pink-300">@theme</code>:
          </p>
          <CodeBlock>{`@import "tailwindcss";

@theme {
  --color-brand: #7c3aed;
  --font-display: "Satoshi", sans-serif;
}

/* now usable anywhere as real utility classes: */
/* <div class="bg-brand font-display"> */`}</CodeBlock>
          <Note>
            Every value inside <code className="text-pink-300">@theme</code>{" "}
            becomes a real CSS custom property too (e.g.{" "}
            <code className="text-pink-300">var(--color-brand)</code>), so you
            can reach for it from plain CSS, not just utility classes.
          </Note>
        </Section>

        {/* ---------------- SPACING SCALE ---------------- */}
        <Section
          id="spacing"
          title="The Spacing Scale (padding, margin, gap, width, height...)"
        >
          <p>
            Numbers in Tailwind are <b>not raw pixels</b> — they're steps on a
            fixed scale. The formula for most of the scale:
          </p>
          <CodeBlock>{`value x 0.25rem = size
(0.25rem = 4px, since the browser default font-size is 16px)`}</CodeBlock>
          <p>
            So <code className="text-pink-300">4</code> ≈{" "}
            <code className="text-pink-300">16px</code>,{" "}
            <code className="text-pink-300">2</code> ≈{" "}
            <code className="text-pink-300">8px</code>,{" "}
            <code className="text-pink-300">1</code> ≈{" "}
            <code className="text-pink-300">4px</code>. This scale is shared by{" "}
            <code className="text-pink-300">p-*</code> (padding),{" "}
            <code className="text-pink-300">m-*</code> (margin),{" "}
            <code className="text-pink-300">gap-*</code>,{" "}
            <code className="text-pink-300">w-*</code>,{" "}
            <code className="text-pink-300">h-*</code>,{" "}
            <code className="text-pink-300">top/right/bottom/left-*</code>, and
            more. Learn the scale once, reuse it everywhere. Because it's built
            on <code className="text-pink-300">rem</code> rather than raw{" "}
            <code className="text-pink-300">px</code>, the whole layout scales
            automatically if a user increases their browser's default font size
            for accessibility.
          </p>
          <Table headers={["Token", "rem", "px"]} rows={spacingScale} />

          <p>
            Margin is the one exception that also accepts <b>negative</b>{" "}
            values, since pulling an element outside its box is valid CSS —
            padding and gap can't go negative, so there's no{" "}
            <code className="text-pink-300">-p-4</code>:
          </p>
          <CodeBlock>{`<div class="-mt-4">pulled up 1rem, overlapping whatever is above it</div>`}</CodeBlock>

          <p className="mt-2 text-sm text-white/60">
            Try it — pick a token and see the actual box size:
          </p>
          <div className="flex flex-wrap gap-2">
            {["1", "2", "4", "6", "8", "12", "16", "24", "32"].map((t) => (
              <button
                key={t}
                onClick={() => setPreviewToken(t)}
                className={`px-3 py-1 rounded-md border text-sm font-mono transition-colors ${
                  previewToken === t
                    ? "bg-blue-500 border-blue-400 text-white"
                    : "border-white/20 text-white/70 hover:border-white/50"
                }`}
              >
                p-{t}
              </button>
            ))}
          </div>
          <div className="w-full flex items-center justify-center bg-white/5 rounded-lg p-6 mt-1">
            <div
              className="bg-blue-500 rounded-md transition-all duration-200"
              style={{ padding: previousRem }}
            >
              <div className="bg-[#0d1117] text-xs text-white/70 px-2 py-1 rounded font-mono">
                content
              </div>
            </div>
          </div>
          <p className="text-sm text-white/60 text-center">
            p-{previewToken} = padding: {previousRem} = {previousPx}
          </p>
        </Section>

        {/* ---------------- COLOR SCALE ---------------- */}
        <Section id="colors" title="The Color System">
          <p>
            Every color comes in <b>11 shades</b>, numbered{" "}
            <code className="text-pink-300">50</code> (near-white) to{" "}
            <code className="text-pink-300">950</code> (near-black). Pattern:{" "}
            <code className="text-pink-300">
              {"{property}-{color}-{shade}"}
            </code>{" "}
            — e.g. <code className="text-pink-300">bg-blue-500</code>,{" "}
            <code className="text-pink-300">text-red-700</code>,{" "}
            <code className="text-pink-300">border-green-300</code>. As of v4,
            the default palette is defined in the OKLCH color space instead of
            plain hex/RGB, which is why the colors look noticeably more vivid
            than older Tailwind versions — shades at the same lightness step
            look consistent across every hue, not just blue.
          </p>
          <div className="w-full overflow-x-auto">
            <div className="flex min-w-[500px] rounded-lg overflow-hidden border border-white/10">
              {blueRamp.map(([shade, hex]) => (
                <div
                  key={shade}
                  className="flex-1 h-16 flex items-end justify-center pb-1"
                  style={{ backgroundColor: hex }}
                >
                  <span
                    className="text-[10px] font-mono"
                    style={{ color: Number(shade) >= 500 ? "#fff" : "#000" }}
                  >
                    {shade}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-white/60">
            Example above: the approximate{" "}
            <code className="text-pink-300">blue</code> ramp rendered in sRGB
            hex for browser-safe display,{" "}
            <code className="text-pink-300">blue-50</code> through{" "}
            <code className="text-pink-300">blue-950</code>. Every color family
            below follows the same 50→950 pattern.
          </p>
          <p>Available color families out of the box:</p>
          <div className="flex flex-wrap gap-2">
            {colorFamilies.map((c) => (
              <span
                key={c}
                className="px-2 py-1 rounded bg-white/10 text-sm font-mono text-white/80"
              >
                {c}
              </span>
            ))}
          </div>
          <Note>
            Rule of thumb: <b>50–200</b> = light backgrounds and subtle fills.{" "}
            <b>300–500</b> = borders, icons, secondary accents. <b>500–700</b> =
            primary buttons/links, the "main" shade people usually mean when
            they just say "blue". <b>800–950</b> = dark backgrounds,
            high-contrast text on light UI.
          </Note>
          <p>
            Opacity shorthand: add{" "}
            <code className="text-pink-300">/{"{amount}"}</code> to any color —{" "}
            <code className="text-pink-300">bg-black/60</code> means black
            background at 60% opacity, no separate opacity utility needed. This
            works on every color utility:{" "}
            <code className="text-pink-300">text-*</code>,{" "}
            <code className="text-pink-300">border-*</code>,{" "}
            <code className="text-pink-300">ring-*</code>, and more.
          </p>
        </Section>

        {/* ---------------- TYPOGRAPHY ---------------- */}
        <Section id="typography" title="Typography Scale">
          <p>Font size (also sets a matching default line-height):</p>
          <Table
            headers={["Class", "Font size", "Line height"]}
            rows={fontSizeScale}
          />
          <p>Font weight:</p>
          <Table
            headers={["Class", "CSS font-weight"]}
            rows={fontWeightScale}
          />
          <p>
            Line height and letter spacing are separate utilities from font
            size, so you can override the paired defaults above whenever a
            design needs tighter or looser type:
          </p>
          <Table
            headers={["Class", "CSS line-height"]}
            rows={lineHeightScale}
          />
          <Table
            headers={["Class", "CSS letter-spacing"]}
            rows={trackingScale}
          />
        </Section>

        {/* ---------------- RADIUS ---------------- */}
        <Section id="radius" title="Border Radius Scale">
          <Table headers={["Class", "Value"]} rows={radiusScale} />
          <div className="flex flex-wrap gap-4 pt-2">
            {radiusScale.map(([cls]) => (
              <div key={cls} className="flex flex-col items-center gap-1">
                <div className={`w-14 h-14 bg-blue-500 ${cls}`} />
                <span className="text-xs text-white/50 font-mono">{cls}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ---------------- SIZING ---------------- */}
        <Section id="sizing" title="Sizing Keywords (width / height)">
          <p>
            Besides the numeric scale from the spacing section, width/height
            accept these special keywords:
          </p>
          <Table
            headers={["Class", "CSS value", "Meaning"]}
            rows={sizingKeywords}
          />
          <Note>
            The <code className="text-pink-300">h-screen</code> vs{" "}
            <code className="text-pink-300">min-h-screen</code> distinction
            matters a lot: <code className="text-pink-300">h-screen</code> locks
            an element to exactly the viewport height and <b>clips overflow</b>.{" "}
            <code className="text-pink-300">min-h-screen</code> lets it grow
            taller than the screen and scroll instead. Default to{" "}
            <code className="text-pink-300">min-h-screen</code> for full-page
            wrappers, and reach for <code className="text-pink-300">h-dvh</code>{" "}
            over <code className="text-pink-300">h-screen</code> on mobile,
            since browser address bars shrink the visible viewport dynamically.
          </Note>
        </Section>

        {/* ---------------- ARBITRARY VALUES ---------------- */}
        <Section id="arbitrary" title="Arbitrary Values — Escaping the Scale">
          <p>
            Need an exact value the scale doesn't have? Use square brackets —
            this is an <b>arbitrary value</b>:
          </p>
          <CodeBlock>{`<div class="w-[327px] top-[13px] bg-[#1da1f2]">
  custom exact values
</div>`}</CodeBlock>
          <p>
            Spaces aren't allowed inside a class name, so inside an arbitrary
            value you write an underscore{" "}
            <code className="text-pink-300">_</code> and Tailwind converts it to
            a space when generating the CSS. This matters most for multi-word
            arbitrary content, like a generated string value:
          </p>
          <CodeBlock>{`<div class="content-['Hello_World']"></div>
/* becomes → content: 'Hello World'; */`}</CodeBlock>
          <p>
            You can also escape into an entirely custom CSS property Tailwind
            has no utility for, using{" "}
            <code className="text-pink-300">[property:value]</code> syntax —
            this is an <b>arbitrary property</b>, not just an arbitrary value:
          </p>
          <CodeBlock>{`<div class="[mask-type:luminance] [text-wrap:balance]">
  properties Tailwind never shipped a shorthand for
</div>`}</CodeBlock>
          <p>
            Need to force a utility to win a specificity fight? Prefix with{" "}
            <code className="text-pink-300">!</code> (the "important" modifier).
            Use this sparingly — reaching for it often is usually a sign of a
            specificity problem worth fixing instead:
          </p>
          <CodeBlock>{`<p class="!text-red-500">always red, wins the fight</p>`}</CodeBlock>
        </Section>

        {/* ---------------- LAYOUT QUICK REF ---------------- */}
        <Section id="layout" title="Layout Quick Reference">
          <p>Flexbox — put on the parent:</p>
          <Table
            headers={["Class", "Does"]}
            rows={[
              ["flex", "display: flex"],
              ["flex-col / flex-row", "stack direction (column / row)"],
              ["items-center", "align children on the cross axis"],
              ["justify-center", "align children on the main axis"],
              ["justify-between", "push children to opposite ends"],
              ["flex-wrap", "let children wrap to new lines"],
              ["flex-1", "child grows/shrinks to fill available space equally"],
              ["gap-4", "space between children, no manual margins needed"],
            ]}
          />
          <p>Grid — put on the parent:</p>
          <Table
            headers={["Class", "Does"]}
            rows={[
              ["grid", "display: grid"],
              ["grid-cols-3", "3 equal-width columns"],
              ["col-span-2", "a child spans 2 columns"],
              ["grid-rows-2", "2 equal-height rows"],
              [
                "place-items-center",
                "shorthand for centering on both axes at once",
              ],
            ]}
          />
          <p>Position:</p>
          <Table
            headers={["Class", "Does"]}
            rows={[
              ["relative", "positioning anchor for absolute children"],
              [
                "absolute",
                "positioned relative to nearest 'relative' ancestor",
              ],
              ["fixed", "positioned relative to the viewport, stays on scroll"],
              [
                "sticky",
                "acts relative until a scroll threshold, then sticks like fixed",
              ],
              ["inset-0", "top:0; right:0; bottom:0; left:0; shorthand"],
            ]}
          />
        </Section>

        {/* ---------------- STATE VARIANTS ---------------- */}
        <Section id="states" title="State Variants (hover, focus, and friends)">
          <p>
            Prefix any utility with a state name and a colon. The utility only
            applies when that state is true:
          </p>
          <CodeBlock>{`<button class="bg-blue-500 hover:bg-blue-600 active:scale-95">
  Hover and click me
</button>`}</CodeBlock>
          <Table
            headers={["Prefix", "Applies when...", "Example"]}
            rows={stateVariants}
          />
          <p>
            <code className="text-pink-300">group</code> /{" "}
            <code className="text-pink-300">peer</code> pattern — put{" "}
            <code className="text-pink-300">group</code> on a parent, then any
            descendant can react to that parent's state:
          </p>
          <CodeBlock>{`<div class="group hover:bg-white/5">
  <p class="text-white/50 group-hover:text-white">
    Lights up when the CARD is hovered, not just this text
  </p>
</div>`}</CodeBlock>
          <Note>
            Any variant can be negated by prefixing it with{" "}
            <code className="text-pink-300">not-</code> — e.g.{" "}
            <code className="text-pink-300">not-hover:opacity-70</code> applies
            whenever the element is <i>not</i> being hovered.
          </Note>
        </Section>

        {/* ---------------- RESPONSIVE ---------------- */}
        <Section id="responsive" title="Responsive Prefixes (short version)">
          <p>
            Same idea as state variants, but the prefix is a min-width
            breakpoint. Mobile-first: unprefixed classes apply to <i>all</i>{" "}
            sizes, and a prefixed class overrides it from that width upward.
          </p>
          <Table
            headers={["Prefix", "Min-width (rem)", "Min-width (px)"]}
            rows={breakpointScale}
          />
          <CodeBlock>{`<div class="text-base md:text-xl lg:text-3xl">
  Small text on phones, bigger from tablets up, biggest on desktop
</div>`}</CodeBlock>
          <p>
            Tailwind can also respond to the size of a <i>parent element</i>{" "}
            instead of the viewport — mark a container with{" "}
            <code className="text-pink-300">@container</code>, then use{" "}
            <code className="text-pink-300">@sm:</code>,{" "}
            <code className="text-pink-300">@md:</code>, etc. on its children.
            Handy for components (like a card) that get reused at different
            widths regardless of screen size.
          </p>
          <p className="text-sm text-white/60">
            Full walkthrough with a live width readout is on the Responsive
            Design page.
          </p>
        </Section>

        {/* ---------------- DARK MODE ---------------- */}
        <Section id="dark-mode" title="Dark Mode">
          <p>
            Prefix any utility with <code className="text-pink-300">dark:</code>{" "}
            to apply it only when dark mode is active:
          </p>
          <CodeBlock>{`<div class="bg-white text-black dark:bg-black dark:text-white">
  Flips with the theme
</div>`}</CodeBlock>
          <p>
            By default this follows the operating system's color-scheme setting.
            To toggle it manually instead (a button in your app, not the OS
            setting), v4 lets you switch the strategy in CSS:
          </p>
          <CodeBlock>{`@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

/* then toggle by adding/removing class="dark" on <html> via JS */`}</CodeBlock>
        </Section>

        {/* ---------------- SHADOWS ---------------- */}
        <Section id="shadows" title="Shadows & Elevation">
          <p>
            <code className="text-pink-300">shadow-*</code> gives an element
            depth without touching layout — a common way to signal "this sits
            above the page" for cards, dropdowns, and modals:
          </p>
          <Table
            headers={["Class", "When to reach for it"]}
            rows={shadowScale}
          />
          <p className="text-sm text-white/60">Pick a shadow to preview it:</p>
          <div className="flex flex-wrap gap-2">
            {shadowScale.map(([cls]) => (
              <button
                key={cls}
                onClick={() => setShadowToken(cls)}
                className={`px-3 py-1 rounded-md border text-sm font-mono transition-colors ${
                  shadowToken === cls
                    ? "bg-blue-500 border-blue-400 text-white"
                    : "border-white/20 text-white/70 hover:border-white/50"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
          <div className="w-full flex items-center justify-center bg-white/5 rounded-lg p-10 mt-1">
            <div
              className="w-32 h-20 rounded-lg bg-white flex items-center justify-center transition-shadow duration-200"
              style={{ boxShadow: shadowMap[shadowToken] }}
            >
              <span className="text-xs font-mono text-black/60">
                {shadowToken}
              </span>
            </div>
          </div>
        </Section>

        {/* ---------------- TRANSITIONS ---------------- */}
        <Section id="transitions" title="Transitions & Simple Animations">
          <p>
            <code className="text-pink-300">transition-*</code> tells the
            browser to animate a property change smoothly instead of jumping
            instantly — pair it with a state variant like{" "}
            <code className="text-pink-300">hover:</code>:
          </p>
          <CodeBlock>{`<button class="scale-100 hover:scale-105 transition-transform duration-200 ease-out">
  Grows smoothly on hover
</button>`}</CodeBlock>
          <Table
            headers={["Class", "Does"]}
            rows={[
              [
                "transition",
                "animates the common properties (color, background, opacity, transform, shadow)",
              ],
              [
                "transition-all",
                "animates every property that changes — convenient, but slightly more expensive",
              ],
              ["transition-colors", "animates only color-related properties"],
              [
                "transition-transform",
                "animates only transform (scale, rotate, translate)",
              ],
            ]}
          />
          <p>How long the animation takes:</p>
          <Table headers={["Class", "Duration"]} rows={durationScale} />
          <p>How the speed changes over that duration:</p>
          <Table headers={["Class", "Feel"]} rows={easingScale} />
          <p>
            For looping effects without writing{" "}
            <code className="text-pink-300">@keyframes</code> yourself, Tailwind
            ships four ready-made animations:{" "}
            <code className="text-pink-300">animate-spin</code> (loading
            spinners), <code className="text-pink-300">animate-ping</code> (a
            radiating pulse, good for notification dots),{" "}
            <code className="text-pink-300">animate-pulse</code> (a slow fade,
            good for loading skeletons), and{" "}
            <code className="text-pink-300">animate-bounce</code>.
          </p>
        </Section>

        {/* ---------------- STACKING / OVERFLOW / ASPECT RATIO ---------------- */}
        <Section
          id="stacking-overflow"
          title="Stacking, Overflow & Aspect Ratio"
        >
          <p>
            <code className="text-pink-300">z-*</code> controls which elements
            sit on top when they overlap. Higher numbers win, but{" "}
            <code className="text-pink-300">z-index</code> only has an effect on
            positioned elements (<code className="text-pink-300">relative</code>
            , <code className="text-pink-300">absolute</code>,{" "}
            <code className="text-pink-300">fixed</code>, or{" "}
            <code className="text-pink-300">sticky</code>):
          </p>
          <Table headers={["Class", "CSS z-index"]} rows={zIndexScale} />
          <p>
            <code className="text-pink-300">overflow-*</code> controls what
            happens when content is bigger than its box:
          </p>
          <Table
            headers={["Class", "Does"]}
            rows={[
              [
                "overflow-visible",
                "default — content spills outside the box, unclipped",
              ],
              [
                "overflow-hidden",
                "clips anything that doesn't fit, no scrollbar",
              ],
              [
                "overflow-auto",
                "adds a scrollbar only if content actually overflows",
              ],
              [
                "overflow-scroll",
                "always shows a scrollbar, even if content fits",
              ],
            ]}
          />
          <p>
            <code className="text-pink-300">aspect-*</code> locks an element's
            width-to-height ratio, so it resizes proportionally instead of
            distorting — commonly used on images, video embeds, and thumbnails:
          </p>
          <CodeBlock>{`<img class="w-full aspect-video object-cover" src="..." />
<!-- always stays 16:9, however wide the parent is -->

<div class="aspect-square">...</div>
<div class="aspect-[4/3]">...</div>`}</CodeBlock>
        </Section>

        {/* ---------------- INTERACTION UTILITIES ---------------- */}
        <Section
          id="interaction"
          title="Cursor, Selection & Other Interaction Utilities"
        >
          <p>
            Small utilities that don't fit neatly elsewhere, but come up
            constantly once you're building actual interactive UI:
          </p>
          <Table
            headers={["Class", "Does"]}
            rows={[
              [
                "cursor-pointer",
                "shows the hand/pointer cursor — use on anything clickable that isn't a real <button>/<a>",
              ],
              [
                "cursor-not-allowed",
                "shows the 'blocked' cursor, usually paired with disabled:",
              ],
              [
                "pointer-events-none",
                "the element becomes invisible to clicks/hover — they pass through to whatever's underneath",
              ],
              [
                "select-none",
                "the user can't text-select this element (menus, drag handles, buttons)",
              ],
              [
                "resize-none",
                "removes the browser's default drag-to-resize handle on <textarea>",
              ],
              [
                "sr-only",
                "visually hidden but still readable by screen readers — essential for accessible labels",
              ],
              [
                "truncate",
                "clips overflowing text to one line with an ellipsis (…)",
              ],
              [
                "line-clamp-2",
                "clips text after N lines instead of just one, still with an ellipsis",
              ],
            ]}
          />
          <Note>
            <code className="text-pink-300">sr-only</code> is worth calling out
            on its own: it's the standard way to give an icon-only button a real
            accessible name without changing how it looks —{" "}
            <code className="text-pink-300">
              {'<span class="sr-only">Close</span>'}
            </code>{" "}
            next to an X icon, for example.
          </Note>
        </Section>

        {/* ---------------- MISC NOTES ---------------- */}
        <Section id="tips" title="Good-to-Know Details">
          <ul className="list-disc list-inside flex flex-col gap-3">
            <li>
              <b>Class order never matters.</b> Tailwind reads whichever classes
              are present; it doesn't care what order they're written in —
              though most teams auto-sort classes into a consistent order with
              the official{" "}
              <code className="text-pink-300">prettier-plugin-tailwindcss</code>{" "}
              so diffs stay clean.
            </li>
            <li>
              <b>Underscore → space</b> only happens inside square-bracket
              arbitrary values (see Arbitrary Values above) — everywhere else,
              an underscore is just an underscore.
            </li>
            <li>
              <b>Borders have no default color in v4.</b> A bare{" "}
              <code className="text-pink-300">border</code> class now inherits{" "}
              <code className="text-pink-300">currentColor</code> instead of a
              light gray like v3 did — always pair it with a{" "}
              <code className="text-pink-300">border-{"{color}"}</code> utility
              so a border doesn't silently take on your text color.
            </li>
            <li>
              <code className="text-pink-300">isolate</code> sets{" "}
              <code className="text-pink-300">isolation: isolate</code>,
              creating a new stacking context. Useful when a child's{" "}
              <code className="text-pink-300">z-index</code> is fighting with
              elements outside its intended container — isolating the parent
              keeps the stacking fight contained.
            </li>
            <li>
              <code className="text-pink-300">gap-*</code> sets spacing between
              children inside <code className="text-pink-300">flex</code> or{" "}
              <code className="text-pink-300">grid</code> containers directly —
              no extra margin utilities needed. For non-flex/grid stacks,{" "}
              <code className="text-pink-300">space-y-*</code> /{" "}
              <code className="text-pink-300">space-x-*</code> add margin
              between adjacent siblings instead.
            </li>
            <li>
              <code className="text-pink-300">@apply</code> lets you fold a
              group of utilities into one custom class name inside your CSS —
              that's exactly how <code className="text-pink-300">.pages</code>{" "}
              and <code className="text-pink-300">.pages-tittle</code> are
              defined in this project's CSS file. Reach for it sparingly though:
              overusing it recreates the old "everything lives in a stylesheet"
              problem Tailwind is meant to avoid.
            </li>
            <li>
              <b>Every scale is customizable.</b> Nothing above is hardcoded —
              redefining a <code className="text-pink-300">--spacing-*</code>,{" "}
              <code className="text-pink-300">--color-*</code>, or{" "}
              <code className="text-pink-300">--radius-*</code> variable inside{" "}
              <code className="text-pink-300">@theme</code> changes it
              project-wide, everywhere that token is used.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default Basics;
