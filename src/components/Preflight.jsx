import Section from "./common/Section";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";

const resetExamples = [
  ["Headings", "Browser default margins are removed."],
  ["Lists", "Default bullets and numbering are removed."],
  ["Buttons and inputs", "Browser-specific default styling is normalized."],
  ["Margins", "Common browser defaults are reset for a predictable starting point."],
];

function Preflight() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Preflight</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Preflight is Tailwind's built-in CSS reset. It runs automatically when
        Tailwind is imported.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="what-is-preflight" title="What Preflight Does">
          <p>
            Browsers give elements different default styles. Preflight removes
            many of those defaults so your page starts from a more predictable
            baseline.
          </p>

          <CodeBlock>{`@import "tailwindcss";`}</CodeBlock>

          <p>
            You do not need to add a class to enable Preflight. Importing
            Tailwind activates it automatically.
          </p>
        </Section>

        <Section id="defaults" title="Defaults It Normalizes">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[420px] text-white text-left border-collapse border-2 border-white [&_th]:border-2 [&_th]:border-white [&_td]:border-2 [&_td]:border-white/40 [&_th]:p-2 [&_td]:p-2">
              <thead className="bg-white/10">
                <tr>
                  <th>Element / Area</th>
                  <th>What changes</th>
                </tr>
              </thead>
              <tbody>
                {resetExamples.map(([element, change]) => (
                  <tr key={element} className="odd:bg-white/[0.03]">
                    <td>{element}</td>
                    <td>{change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The goal is not to make every element look finished. It gives you
            a clean baseline so Tailwind utilities control the final design.
          </p>
        </Section>

        <Section id="bring-back-styles" title="Adding Styles Back">
          <p>
            Because default browser styling is reset, add the styles you
            actually want with Tailwind utilities.
          </p>

          <CodeBlock>{`<ul class="list-disc pl-5">
  <li>First item</li>
  <li>Second item</li>
</ul>`}</CodeBlock>

          <p>
            Here, <code className="text-pink-300">list-disc</code> restores
            bullets and <code className="text-pink-300">pl-5</code> adds the
            required indentation.
          </p>

          <div className="w-full max-w-xl rounded-lg bg-white/5 p-6">
            <ul className="list-disc pl-5 text-white space-y-1">
              <li>Preflight gives a predictable baseline.</li>
              <li>Utilities add back the design you want.</li>
              <li>You control the final appearance explicitly.</li>
            </ul>
          </div>
        </Section>

        <Section id="why-it-matters" title="Why It Matters">
          <p>
            Without a reset, the same HTML can look different because each
            browser supplies its own default margins, spacing, and control
            styles. Preflight removes much of that inconsistency.
          </p>

          <Note>
            Preflight is automatic. You normally do not need to think about it
            unless you notice a browser default you expected but Tailwind has
            intentionally reset.
          </Note>
        </Section>

        <Section id="remember" title="Remember">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>Preflight is Tailwind's built-in reset.</li>
            <li>It runs automatically with @import "tailwindcss".</li>
            <li>It removes many inconsistent browser defaults.</li>
            <li>Add utilities when you want those styles back.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default Preflight;