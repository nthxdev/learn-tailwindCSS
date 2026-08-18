import Section from "./common/Section";
import Table from "./common/Table";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";

const directives = [
  ["@import \"tailwindcss\";", "Loads Tailwind CSS."],
  ["@theme { }", "Defines or overrides design tokens such as colors, spacing, fonts, and breakpoints."],
  ["@layer base/components/utilities", "Organizes custom CSS into Tailwind's layers and controls cascade order."],
  ["@apply", "Combines existing Tailwind utilities inside a custom CSS class."],
  ["@variant", "Applies a Tailwind variant conditionally inside custom CSS."],
  ["@custom-variant", "Creates a custom variant, such as a custom dark-mode trigger."],
  ["theme(--color-blue-500)", "Reads a theme value inside normal CSS."],
];

function FunctionsDirectives() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Functions and Directives</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Tailwind CSS provides special <code className="text-pink-300">@</code>{" "}
        directives and theme functions for working directly inside your CSS.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="directives" title="Core Directives">
          <p>
            These directives control how Tailwind is loaded, customized, and
            extended from your CSS file.
          </p>

          <Table
            headers={["Directive / Function", "Purpose"]}
            rows={directives}
          />
        </Section>

        <Section id="theme" title="Using Theme Values">
          <p>
            The <code className="text-pink-300">theme()</code> function lets
            custom CSS read a value from Tailwind's theme instead of repeating
            the value manually.
          </p>

          <CodeBlock>{`.card {
  background: theme(--color-gray-100);

  @variant dark {
    background: theme(--color-gray-800);
  }
}`}</CodeBlock>

          <p>
            Here, the card uses one theme value normally and another when the
            <code className="text-pink-300">dark</code> variant is active.
          </p>

          <Note>
            Keep design tokens in the theme when a value is reused. Reading the
            token from CSS keeps the design system centralized.
          </Note>
        </Section>

        <Section id="import" title="@import">
          <p>
            The standard starting point for Tailwind v4 is importing Tailwind
            into your main CSS file.
          </p>

          <CodeBlock>{`@import "tailwindcss";`}</CodeBlock>

          <p>
            This loads Tailwind's framework layers, including its theme,
            utilities, and Preflight reset.
          </p>
        </Section>

        <Section id="theme-directive" title="@theme">
          <p>
            Use <code className="text-pink-300">@theme</code> to define or
            override design tokens that Tailwind can expose as utilities.
          </p>

          <CodeBlock>{`@theme {
  --color-brand: #7c3aed;
  --font-display: "Poppins", sans-serif;
}`}</CodeBlock>

          <p>
            These tokens can then be used through generated utilities such as
            <code className="text-pink-300">bg-brand</code> and{" "}
            <code className="text-pink-300">font-display</code>.
          </p>
        </Section>

        <Section id="apply" title="@apply">
          <p>
            <code className="text-pink-300">@apply</code> lets you reuse
            Tailwind utilities inside a normal CSS class.
          </p>

          <CodeBlock>{`.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded-lg;
}`}</CodeBlock>

          <Note>
            Use it when a real CSS class is useful, such as styling generated
            content. For most components, regular utility classes are simpler.
          </Note>
        </Section>

        <Section id="variants" title="@variant and @custom-variant">
          <p>
            <code className="text-pink-300">@variant</code> applies an existing
            Tailwind variant inside custom CSS.{" "}
            <code className="text-pink-300">@custom-variant</code> lets you
            define your own variant rule.
          </p>

          <CodeBlock>{`/* Use an existing variant */
.card {
  @variant dark {
    background: theme(--color-gray-800);
  }
}

/* Define a custom variant */
@custom-variant theme-dark (&:where(.theme-dark, .theme-dark *));`}</CodeBlock>
        </Section>

        <Section id="when-to-use" title="When to Use Them">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>
              <b>@import:</b> load Tailwind.
            </li>
            <li>
              <b>@theme:</b> define your design tokens.
            </li>
            <li>
              <b>@layer:</b> organize custom CSS by cascade layer.
            </li>
            <li>
              <b>@apply:</b> combine utilities into a reusable CSS class.
            </li>
            <li>
              <b>@variant:</b> use an existing variant inside custom CSS.
            </li>
            <li>
              <b>@custom-variant:</b> create a new variant rule.
            </li>
            <li>
              <b>theme():</b> reuse a theme value in normal CSS.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default FunctionsDirectives;