import Section from "./common/Section";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";

const pseudoElements = [
  ["before:", "inserts generated content before the element's content"],
  ["after:", "inserts generated content after the element's content"],
  ["content-[...]", "provides the generated content used by before/after"],
];

function PseudoElem() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Pseudo Elements</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Pseudo-element variants create generated content before or after an
        element without adding another HTML node.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="before-after" title="Before and After">
          <p>
            Tailwind provides <code className="text-pink-300">before:</code> and{" "}
            <code className="text-pink-300">after:</code> variants. To create
            the pseudo element, give it content, then style it normally.
          </p>

          <CodeBlock>{`<div class="relative
  before:content-['']
  before:absolute
  before:inset-0
  before:bg-green-500
  before:-z-10
">
  Content
</div>`}</CodeBlock>

          <div className="flex flex-col gap-10 w-full max-w-xl">
            <div className="relative isolate bg-yellow-500 px-10 py-6 before:content-[''] before:absolute before:inset-[-20px] before:bg-green-500 before:-z-10">
              <p className="font-bold text-black">Before</p>
              <p className="text-black/70">
                The green layer is generated with before:.
              </p>
            </div>

            <div className="relative isolate bg-yellow-500 px-10 py-6 after:content-[''] after:absolute after:inset-[-20px] after:bg-blue-500 after:z-10">
              <p className="relative z-20 font-bold text-black">After</p>
              <p className="relative z-20 text-black/70">
                The blue layer is generated with after:.
              </p>
            </div>
          </div>
        </Section>

        <Section id="variants" title="Useful Pseudo-Element Utilities">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[420px] text-white text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_td]:border-white/40 [&_th]:p-2 [&_td]:p-2">
              <thead className="bg-white/10">
                <tr>
                  <th>Variant</th>
                  <th>Purpose</th>
                </tr>
              </thead>
              <tbody>
                {pseudoElements.map(([variant, purpose]) => (
                  <tr key={variant} className="odd:bg-white/[0.03]">
                    <td className="font-mono">{variant}</td>
                    <td>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CodeBlock>{`<span class="before:content-['→'] before:mr-2">
  Next
</span>

<span class="after:content-['*'] after:text-red-500">
  Required
</span>`}</CodeBlock>
        </Section>

        <Section id="content" title="The Content Utility">
          <p>
            <code className="text-pink-300">content-['...']</code> defines what
            the pseudo element contains. An empty value is common when the
            pseudo element is only being used as a decorative shape or layer.
          </p>

          <CodeBlock>{`<!-- Empty decorative element -->
<div class="before:content-[''] ..."></div>

<!-- Generated text -->
<span class="after:content-['✓']">
  Complete
</span>`}</CodeBlock>

          <Note>
            Pseudo elements are best for decoration, icons, labels, and visual
            effects. Do not place important semantic content in generated CSS
            content.
          </Note>
        </Section>

        <Section id="positioning" title="Building Decorative Shapes">
          <p>
            A common pattern is to make the pseudo element{" "}
            <code className="text-pink-300">absolute</code>, position it with
            <code className="text-pink-300">inset</code>, and control its layer
            with <code className="text-pink-300">z-index</code>.
          </p>

          <CodeBlock>{`<div class="relative isolate
  before:content-['']
  before:absolute
  before:inset-[-12px]
  before:bg-purple-500
  before:-z-10
">
  Card
</div>`}</CodeBlock>

          <p className="text-white/60 text-sm">
            The <code className="text-pink-300">isolate</code> utility creates
            a separate stacking context, making the z-index relationship easier
            to control.
          </p>
        </Section>
      </div>
    </div>
  );
}

export default PseudoElem;