import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const spacingUtilities = [
  ["p-4 / px-4 / py-2 / pt-1 / pr-2 / pb-3 / pl-4", "padding", "All sides, x-axis, y-axis, or one side."],
  ["m-4 / mx-auto / -mt-2", "margin", "Outer spacing. Negative values pull elements outward."],
  ["space-x-4 / space-y-2", "space between siblings", "Adds spacing between adjacent children without adding it before the first or after the last."],
];

function Spacing() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Spacing</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Padding controls space inside a box. Margin controls space outside it.
        Space utilities add separation between siblings.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="spacing-reference" title="Spacing Utilities">
          <Table
            headers={["Tailwind", "CSS", "Use"]}
            rows={spacingUtilities}
          />
        </Section>

        <Section id="padding" title="Padding">
          <p>
            <code className="text-pink-300">p-*</code> adds padding on every
            side. Use <code className="text-pink-300">px-*</code> or{" "}
            <code className="text-pink-300">py-*</code> for one axis, or a
            directional utility for one side.
          </p>

          <CodeBlock>{`<div class="p-4">all sides</div>

<div class="px-4 py-2">
  horizontal + vertical
</div>

<div class="pt-4">top only</div>`}</CodeBlock>
        </Section>

        <Section id="margin" title="Margin">
          <p>
            <code className="text-pink-300">m-*</code> creates outside spacing.
            <code className="text-pink-300">mx-auto</code> is the classic way
            to center a block with a constrained width.
          </p>

          <CodeBlock>{`<div class="max-w-4xl mx-auto px-4">
  Centered page content
</div>

<div class="-mt-2">
  Pulled upward with negative margin
</div>`}</CodeBlock>

          <Note>
            Negative margin is available with <code className="text-pink-300">-m-*</code>,
            such as <code className="text-pink-300">-mt-2</code>. Padding and gap
            do not have negative equivalents.
          </Note>
        </Section>

        <Section id="siblings" title="Spacing Between Siblings">
          <p>
            <code className="text-pink-300">space-x-*</code> and{" "}
            <code className="text-pink-300">space-y-*</code> add space between
            adjacent children.
          </p>

          <CodeBlock>{`<div class="space-y-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}</CodeBlock>

          <Note>
            Prefer <code className="text-pink-300">gap-*</code> inside{" "}
            <code className="text-pink-300">flex</code> or{" "}
            <code className="text-pink-300">grid</code>. It behaves more
            predictably when items wrap.
          </Note>
        </Section>

        <Section id="mental-model" title="A Simple Mental Model">
          <Table
            headers={["Utility", "Think"]}
            rows={[
              ["padding", "Space inside the element."],
              ["margin", "Space outside the element."],
              ["gap", "Space between flex/grid children."],
              ["space-x / space-y", "Space between siblings."],
            ]}
          />
        </Section>
      </div>
    </div>
  );
}

export default Spacing;