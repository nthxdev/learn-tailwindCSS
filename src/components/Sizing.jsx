import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const sizingUtilities = [
  ["w-64 / w-1/2 / w-full / w-screen / w-fit", "width", "Set width using the spacing scale, a fraction, the parent, viewport, or content."],
  ["min-w-0 / min-w-full", "min-width", "Set the smallest allowed width."],
  ["max-w-md / max-w-full / max-w-screen-lg", "max-width", "Limit how wide an element can become."],
  ["h-64 / h-full / h-screen / h-dvh", "height", "Set height using fixed, parent, viewport, or dynamic viewport sizing."],
  ["min-h-screen", "min-height", "At least one viewport tall; useful for full-page layouts."],
  ["max-h-96", "max-height", "Limit the maximum height."],
  ["size-10", "width + height", "Set both width and height with one utility."],
  ["is-full", "inline-size", "Set size along the inline axis."],
  ["min-is-0 / max-is-full", "min/max-inline-size", "Set inline-size limits."],
  ["bs-64", "block-size", "Set size along the block axis."],
  ["min-bs-0 / max-bs-full", "min/max-block-size", "Set block-size limits."],
];

function Sizing() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Sizing</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Control width, height, minimums, maximums, and logical dimensions.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="sizing-reference" title="Sizing Utilities">
          <Table
            headers={["Tailwind", "CSS", "Use"]}
            rows={sizingUtilities}
          />
        </Section>

        <Section id="width" title="Width">
          <CodeBlock>{`<div class="w-64">Fixed scale width</div>
<div class="w-1/2">Half the parent</div>
<div class="w-full">Full parent width</div>
<div class="w-fit">Only as wide as its content</div>`}</CodeBlock>

          <p>
            Use <code className="text-pink-300">w-*</code> for normal width
            control. <code className="text-pink-300">max-w-*</code> is especially
            useful for readable page content.
          </p>
        </Section>

        <Section id="height" title="Height">
          <CodeBlock>{`<div class="h-64">Fixed height</div>
<div class="h-full">Parent height</div>
<div class="h-dvh">Dynamic viewport height</div>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">h-dvh</code> follows the dynamic
            viewport and is usually safer than <code className="text-pink-300">h-screen</code>
            on mobile browsers.
          </Note>
        </Section>

        <Section id="min-max" title="Minimum & Maximum Size">
          <p>
            Minimum and maximum utilities let an element grow or shrink without
            crossing a boundary.
          </p>

          <CodeBlock>{`<main class="min-h-screen">
  At least one viewport tall.
</main>

<article class="max-w-md">
  Never gets wider than the chosen limit.
</article>

<div class="min-w-0">
  Can shrink inside a flex/grid layout.
</div>`}</CodeBlock>
        </Section>

        <Section id="full-page" title="Full-Height Page Pattern">
          <CodeBlock>{`<div class="min-h-screen flex flex-col">
  <header class="h-16">
    nav
  </header>

  <main class="flex-1">
    grows into remaining space
  </main>
</div>`}</CodeBlock>

          <p>
            <code className="text-pink-300">min-h-screen</code> gives the page a
            full-screen minimum. <code className="text-pink-300">flex-1</code>{" "}
            lets the main area take the remaining height.
          </p>
        </Section>

        <Section id="size" title="Width & Height Together">
          <p>
            <code className="text-pink-300">size-*</code> is a shortcut when
            width and height should match.
          </p>

          <CodeBlock>{`<div class="size-10 rounded-full">
  40 × 40
</div>`}</CodeBlock>
        </Section>

        <Section id="logical" title="Logical Sizing">
          <p>
            Logical properties describe size by writing direction instead of
            physical horizontal and vertical directions.
          </p>

          <Table
            headers={["Utility", "Meaning"]}
            rows={[
              ["is-full", "inline-size: 100%"],
              ["min-is-0", "min-inline-size: 0"],
              ["max-is-full", "max-inline-size: 100%"],
              ["bs-64", "block-size from the spacing scale"],
              ["min-bs-0", "min-block-size: 0"],
              ["max-bs-full", "max-block-size: 100%"],
            ]}
          />

          <Note>
            In left-to-right English, inline-size behaves much like width and
            block-size behaves much like height. Logical properties also adapt
            to right-to-left and vertical writing modes.
          </Note>
        </Section>
      </div>
    </div>
  );
}

export default Sizing;