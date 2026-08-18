function ResponsiveGuide() {
  return (
    <div className="pages">
      <h1 className="pages-tittle">Responsive Design</h1>
      <p className="text-white max-w-2xl text-center">
        Everything below is the "why" behind the breakpoint table and demo box
        further down the page. Read this once, then use it as a cheat sheet
        whenever you're not sure which unit or approach to reach for.
      </p>

      {/* ---------- 1. Core mindset ---------- */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="pages-tittle !text-[1.25rem] text-left">1. Core</h2>
        <ul className="text-white list-disc list-inside space-y-1 mt-2">
          <li>
            <b>Mobile-first:</b> write base styles for small screens, then add{" "}
            <code>sm:</code> <code>md:</code> <code>lg:</code> overrides as the
            screen grows. Fighting desktop-first (writing for large screens then
            shrinking) causes most layout bugs.
          </li>
          <li>
            <b>Fluid over fixed:</b> prefer layouts that adapt continuously
            (flex, grid, %, clamp) over a handful of fixed pixel layouts
            stitched together at breakpoints.
          </li>
          <li>
            <b>Content dictates breakpoints:</b> don't design for "iPhone" or
            "iPad" specifically — resize the browser until the content itself
            looks cramped or too spread out, and add a breakpoint there.
          </li>
          <li>
            <b>Test at the edges:</b> the widths right before/after a breakpoint
            (e.g. 767px vs 768px) are where bugs hide, not just the standard
            device sizes.
          </li>
        </ul>
      </div>

      {/* ---------- 2. Units: what to use, when ---------- */}
      <div className="w-full max-w-2xl mt-8 overflow-x-auto">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          2. Units — What & When
        </h2>
        <table className="w-full min-w-[280px] text-white text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_td]:border-white [&_th]:p-2 [&_td]:p-2 mt-2">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Use it for</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>rem</code>
              </td>
              <td>
                Font sizes, spacing, radii — scales with the root font size,
                respects user's browser zoom/accessibility settings. Default
                choice for almost everything.
              </td>
            </tr>
            <tr>
              <td>
                <code>em</code>
              </td>
              <td>
                Spacing that should scale relative to its own element's font
                size (e.g. padding inside a button that grows with the button's
                text).
              </td>
            </tr>
            <tr>
              <td>
                <code>px</code>
              </td>
              <td>
                Borders, shadows, hairlines — things that should stay crisp and
                NOT scale (1px border should always be 1px).
              </td>
            </tr>
            <tr>
              <td>
                <code>%</code>
              </td>
              <td>
                Widths relative to a parent container (e.g. a column inside a
                flex/grid row).
              </td>
            </tr>
            <tr>
              <td>
                <code>vw / vh</code>
              </td>
              <td>
                Full-viewport sections (hero height, full-bleed backgrounds).
                Avoid for font-size alone — it ignores zoom and can get too
                small/large on extreme screens.
              </td>
            </tr>
            <tr>
              <td>
                <code>min() / max() / clamp()</code>
              </td>
              <td>
                Fluid values with safe limits, e.g.{" "}
                <code>clamp(1rem, 2vw + 1rem, 1.5rem)</code> for text that
                scales smoothly but never gets unreadably small or huge.
              </td>
            </tr>
            <tr>
              <td>
                <code>fr</code> (grid)
              </td>
              <td>
                Flexible grid tracks that share remaining space proportionally.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-white mt-2 text-sm">
          Rule of thumb: <b>rem</b> for type & spacing, <b>%</b>/<b>fr</b> for
          layout widths, <b>px</b> for things that must never scale,{" "}
          <b>clamp()</b> when you want fluid scaling with a floor and ceiling.
        </p>
      </div>

      {/* ---------- 3. Typography ---------- */}
      <div className="w-full max-w-2xl mt-8 overflow-x-auto">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          3. Typography Sizing
        </h2>
        <table className="w-full min-w-[280px] text-white text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_td]:border-white [&_th]:p-2 [&_td]:p-2 mt-2">
          <thead>
            <tr>
              <th>Element</th>
              <th>Safe general-purpose size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Body text</td>
              <td>
                16px (1rem) minimum — going below this hurts readability and
                makes mobile Safari auto-zoom into inputs.
              </td>
            </tr>
            <tr>
              <td>Small print / captions</td>
              <td>14px (0.875rem) — don't go below this for real content.</td>
            </tr>
            <tr>
              <td>H1</td>
              <td>
                ~32–48px on desktop, scaling down to ~24–28px on mobile (use{" "}
                <code>clamp()</code>).
              </td>
            </tr>
            <tr>
              <td>H2 / H3</td>
              <td>
                ~20–28px, scaled similarly to H1 but with a smaller range.
              </td>
            </tr>
            <tr>
              <td>Line height</td>
              <td>1.4–1.6 for body copy (tighter for headings, ~1.1–1.3).</td>
            </tr>
            <tr>
              <td>Line length</td>
              <td>
                Keep paragraphs around 45–75 characters per line — use{" "}
                <code>max-width</code> on text blocks, not full screen width.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ---------- 4. Layout & spacing ---------- */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          4. Layout & Spacing
        </h2>
        <ul className="text-white list-disc list-inside space-y-1 mt-2">
          <li>
            Use <b>Flexbox</b> for 1-dimensional layouts (a row or column of
            items) and <b>CSS Grid</b> for 2-dimensional layouts (rows + columns
            together).
          </li>
          <li>
            Set <code>max-width</code> on containers instead of a fixed{" "}
            <code>width</code>, so they shrink gracefully on small screens but
            don't stretch infinitely on huge ones.
          </li>
          <li>
            Use consistent spacing scale (e.g. 4px/8px increments — Tailwind's
            default scale) instead of arbitrary values, so paddings/margins feel
            intentional across breakpoints.
          </li>
          <li>
            Avoid fixed <code>height</code> on containers with text — text
            reflows at different widths and fixed heights cause
            clipping/overflow. Use <code>min-height</code> instead.
          </li>
          <li>
            Wrap wide elements (tables, code blocks) in{" "}
            <code>overflow-x-auto</code> rather than letting them squish or
            break the layout.
          </li>
        </ul>
      </div>

      {/* ---------- 5. Images & media ---------- */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          5. Images & Media
        </h2>
        <ul className="text-white list-disc list-inside space-y-1 mt-2">
          <li>
            Always set <code>max-width: 100%</code> (or <code>max-w-full</code>)
            and <code>height: auto</code> on images so they never overflow their
            container.
          </li>
          <li>
            Use <code>object-fit: cover</code> for images that must fill a
            fixed-aspect box (e.g. avatars, banners) without distorting.
          </li>
          <li>
            Serve different image sizes with <code>srcset</code>/
            <code>sizes</code> (or a framework's Image component) so mobile
            doesn't download a desktop-sized file.
          </li>
          <li>
            Reserve space for images/embeds (via <code>aspect-ratio</code>) to
            prevent layout shift while they load.
          </li>
        </ul>
      </div>

      {/* ---------- 6. Touch & accessibility ---------- */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          6. Touch Targets & Accessibility
        </h2>
        <ul className="text-white list-disc list-inside space-y-1 mt-2">
          <li>
            Minimum tappable size: <b>44×44px</b> (Apple HIG) / <b>48×48px</b>{" "}
            (Material) for buttons, links, icons on touch devices.
          </li>
          <li>
            Leave real spacing between tap targets so fingers don't mis-tap
            neighboring elements.
          </li>
          <li>
            Don't rely on <code>:hover</code> alone to reveal important content
            — touch devices have no hover state.
          </li>
          <li>
            Keep visible keyboard focus styles; don't remove{" "}
            <code>outline</code> without providing a replacement.
          </li>
          <li>
            Respect <code>prefers-reduced-motion</code> for users sensitive to
            animation.
          </li>
        </ul>
      </div>

      {/* ---------- 7. Common breakpoint philosophy ---------- */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          7. Breakpoints — General Guidance
        </h2>
        <ul className="text-white list-disc list-inside space-y-1 mt-2">
          <li>
            Most frameworks (Tailwind, Bootstrap) converge around similar
            ranges: ~640px (large phones), ~768px (tablets), ~1024px (small
            laptops), ~1280–1536px (desktops).
          </li>
          <li>
            You rarely need more than 3–4 breakpoints. Adding too many creates
            maintenance overhead for diminishing benefit.
          </li>
          <li>
            Design the extremes first (smallest phone, largest desktop) — the
            middle sizes usually fall into place naturally.
          </li>
        </ul>
      </div>

      {/* ---------- 8. Quick checklist ---------- */}
      <div className="w-full max-w-2xl mt-8 mb-4">
        <h2 className="pages-tittle !text-[1.25rem] text-left">
          8. Quick Checklist Before Shipping
        </h2>
        <ul className="text-white list-disc list-inside space-y-1 mt-2">
          <li>
            Does it work at 320px wide (smallest common phone) without
            horizontal scroll?
          </li>
          <li>Is body text at least 16px?</li>
          <li>Are tap targets at least 44px?</li>
          <li>
            Do images/tables overflow gracefully instead of breaking layout?
          </li>
          <li>
            Did you test resizing the browser slowly, not just at fixed device
            presets?
          </li>
          <li>Does zooming to 200% still leave text readable and usable?</li>
        </ul>
      </div>
    </div>
  );
}

export default ResponsiveGuide;
