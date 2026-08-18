import Section from "./common/Section";
import Table from "./common/Table";
import Note from "./common/Note";
import CodeBlock from "./common/CodeBlock";

const stateVariants = [
  ["hover:", "when the pointer is over the element", "hover:bg-red-500"],
  ["focus:", "when the element has focus", "focus:ring-2"],
  ["focus-visible:", "when focus is visible, usually from keyboard input", "focus-visible:outline-2"],
  ["active:", "while the element is being pressed", "active:scale-95"],
  ["disabled:", "when a form control is disabled", "disabled:opacity-50"],
  ["visited:", "after a link has been visited", "visited:text-red-500"],
  ["checked:", "when a checkbox or radio is checked", "checked:accent-red-500"],
  ["first: / last:", "when it is the first or last sibling", "first:mt-0"],
  ["odd: / even:", "when it is in an odd or even sibling position", "odd:bg-white/5"],
  ["group-hover:", "when a parent with group is hovered", "group-hover:text-red-500"],
  ["peer-focus:", "when a sibling with peer receives focus", "peer-focus:text-red-500"],
];

const examples = [
  { label: "Hover", className: "hover:bg-red-500" },
  { label: "Focus", className: "focus:bg-red-500" },
  { label: "Keyboard Focus", className: "focus-visible:bg-red-500" },
  { label: "Active", className: "active:scale-110" },
  { label: "Disabled", className: "disabled:bg-gray-500", disabled: true },
];

function PseudoClass() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Pseudo Classes</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Pseudo-class variants apply Tailwind utilities only when an element is
        in a particular state.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="what-are-pseudo-classes" title="What Pseudo Classes Do">
          <p>
            A pseudo class describes a state such as hover, focus, active,
            checked, or disabled. Tailwind writes that state before the
            utility: <code className="text-pink-300">hover:bg-red-500</code>.
          </p>

          <CodeBlock>{`<button class="bg-blue-500 hover:bg-red-500">
  Hover me
</button>`}</CodeBlock>

          <div className="flex flex-wrap gap-3">
            {examples.map(({ label, className, disabled }) => (
              <button
                key={label}
                disabled={disabled}
                className={`bg-blue-500 px-4 py-2 rounded-md text-white font-semibold transition-transform ${className}`}
              >
                {label}
              </button>
            ))}
          </div>
        </Section>

        <Section id="states" title="Common State Variants">
          <Table
            headers={["Variant", "Applies when...", "Example"]}
            rows={stateVariants}
          />
        </Section>

        <Section id="group" title="Group Variants">
          <p>
            Add <code className="text-pink-300">group</code> to a parent, then
            use <code className="text-pink-300">group-hover:</code> on a child.
            The child can react to the parent's state.
          </p>

          <CodeBlock>{`<div class="group p-4 rounded-lg bg-white/10">
  <p class="text-white/50 group-hover:text-white">
    Hover the card
  </p>
</div>`}</CodeBlock>

          <div className="group w-full max-w-md rounded-lg bg-white/10 p-5 transition-colors hover:bg-white/20">
            <p className="text-white/50 transition-colors group-hover:text-white">
              The parent is hovered, so this text changes.
            </p>
          </div>
        </Section>

        <Section id="peer" title="Peer Variants">
          <p>
            Add <code className="text-pink-300">peer</code> to one sibling, then
            let another sibling react with <code className="text-pink-300">peer-focus:</code>.
          </p>

          <CodeBlock>{`<input class="peer border p-2" />

<p class="text-white peer-focus:text-red-500">
  Changes when the input is focused
</p>`}</CodeBlock>

          <div className="w-full max-w-md">
            <input
              className="peer w-full rounded-md border border-white/20 bg-white p-2 text-black outline-none"
              placeholder="Focus me"
            />
            <p className="mt-2 text-white/50 peer-focus:text-red-400">
              This text reacts to the input.
            </p>
          </div>
        </Section>

        <Section id="links-and-controls" title="Links and Form Controls">
          <p>
            Pseudo classes are especially useful for links and form elements.
            For example, <code className="text-pink-300">visited:</code>{" "}
            styles visited links and <code className="text-pink-300">checked:</code>{" "}
            styles checked controls.
          </p>

          <CodeBlock>{`<a class="text-blue-400 visited:text-red-400">
  Visited link
</a>

<input type="checkbox" class="checked:accent-red-500" />`}</CodeBlock>

          <div className="flex flex-col gap-3 text-white">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 visited:text-red-400 hover:underline"
            >
              Open example.com
            </a>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 checked:accent-red-500" />
              Check me
            </label>
          </div>
        </Section>

        <Section id="focus" title="Focus vs Focus-Visible">
          <p>
            <code className="text-pink-300">focus:</code> applies whenever an
            element is focused. <code className="text-pink-300">focus-visible:</code>{" "}
            is better when you want a visible focus indicator mainly for
            keyboard navigation.
          </p>

          <Note>
            Keep a visible focus style for keyboard users. Do not remove focus
            indicators without providing an accessible replacement.
          </Note>
        </Section>
      </div>
    </div>
  );
}

export default PseudoClass;