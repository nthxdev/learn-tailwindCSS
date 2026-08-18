import Section from "./common/Section";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Table from "./common/Table";

const layerRows = [
  ["base", "Global defaults, resets, and element styles."],
  ["components", "Reusable classes such as cards and buttons."],
  ["utilities", "Small custom utilities that should apply late in the cascade."],
];

function CustomStyles() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Adding Custom Styles</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Tailwind utilities cover most cases. When they do not, these escape hatches
        let you add exact values or custom CSS.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section title="Arbitrary Values">
          <p>
            Use square brackets when you need one exact value outside Tailwind's
            normal utility scale.
          </p>

          <CodeBlock>{`<div class="top-[117px] grid-cols-[1fr_2fr_1fr] bg-[url('/hero.png')]">
  Custom values
</div>`}</CodeBlock>
        </Section>

        <Section title="Arbitrary Properties">
          <p>
            Write the CSS property itself as <code className="text-pink-300">[property:value]</code>
            when Tailwind does not provide a utility for it.
          </p>

          <CodeBlock>{`<div class="[mask-type:luminance] [-webkit-tap-highlight-color:transparent]">
  Custom CSS properties
</div>`}</CodeBlock>
        </Section>

        <Section title="@apply">
          <p>
            <code className="text-pink-300">@apply</code> combines existing utilities into
            one reusable CSS class. It is useful when markup needs a traditional class,
            such as styling generated markdown.
          </p>

          <CodeBlock>{`.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700;
}`}</CodeBlock>

          <CodeBlock>{`<button class="btn-primary">
  Save
</button>`}</CodeBlock>

          <Note>
            Use <code className="text-pink-300">@apply</code> selectively. Turning everything
            into custom classes brings back much of the stylesheet complexity Tailwind
            is meant to reduce.
          </Note>
        </Section>

        <Section title="The Important Modifier">
          <p>
            Add <code className="text-pink-300">!</code> to a utility when it must win a
            specificity conflict.
          </p>

          <CodeBlock>{`<div class="bg-red-500!">
  This utility is marked !important
</div>`}</CodeBlock>

          <Note>
            Treat <code className="text-pink-300">!</code> as an escape hatch. If you need it
            everywhere, fix the underlying specificity problem instead.
          </Note>
        </Section>

        <Section title="@layer">
          <p>
            <code className="text-pink-300">@layer</code> places custom CSS into a predictable
            Tailwind layer: <code className="text-pink-300">base</code>,
            <code className="text-pink-300"> components</code>, or
            <code className="text-pink-300"> utilities</code>.
          </p>

          <CodeBlock>{`@layer components {
  .card {
    @apply rounded-xl shadow p-6 bg-white;
  }
}`}</CodeBlock>

          <Table headers={["Layer", "Typical use"]} rows={layerRows} />
        </Section>

        <Section title="Which Tool Should You Use?">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li><b>Arbitrary values:</b> one exact value.</li>
            <li><b>Arbitrary properties:</b> a CSS property with no utility.</li>
            <li><b>@apply:</b> a reusable class built from utilities.</li>
            <li><b>!:</b> force one utility to win a specificity conflict.</li>
            <li><b>@layer:</b> control where custom CSS sits in the cascade.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default CustomStyles;