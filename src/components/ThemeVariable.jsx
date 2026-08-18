import Section from "./common/Section";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Table from "./common/Table";

const themeExamples = [
  ["--color-brand", "#7c3aed", "creates bg-brand"],
  ["--font-display", '"Poppins", sans-serif', "creates font-display"],
  ["--breakpoint-3xl", "1920px", "creates the 3xl: variant"],
];

function ThemeVariable() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Theme Variables</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Tailwind v4 uses CSS variables as the foundation for its design system:
        colors, fonts, spacing, breakpoints, and more.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="theme" title="How Theme Variables Work">
          <p>
            Tailwind v4 defines reusable design tokens with{" "}
            <code className="text-pink-300">@theme</code>. Each token can
            generate a matching utility class.
          </p>

          <CodeBlock>{`@import "tailwindcss";

@theme {
  --color-brand: #7c3aed;
  --font-display: "Poppins", sans-serif;
  --breakpoint-3xl: 1920px;
}`}</CodeBlock>

          <Table
            headers={["Variable", "Value", "Creates"]}
            rows={themeExamples}
          />

          <p>
            For example, <code className="text-pink-300">--color-brand</code>{" "}
            gives you
            <code className="text-pink-300"> bg-brand</code>. The same token is
            available in CSS through{" "}
            <code className="text-pink-300">var(--color-brand)</code>.
          </p>

          <CodeBlock>{`<div class="bg-brand font-display 3xl:text-6xl">
  Branded content
</div>`}</CodeBlock>
        </Section>

        <Section id="direct-use" title="Using Theme Variables Directly">
          <p>
            Generated utilities are not the only option. Reference a theme
            variable inside an arbitrary value when you need the raw CSS
            variable.
          </p>

          <CodeBlock>{`<div class="bg-[var(--color-brand)]">
  Uses the theme color directly
</div>`}</CodeBlock>

          <Note>
            Keep reusable design values in the theme. Change the token once and
            every utility using it updates across the project.
          </Note>
        </Section>

        <Section id="v3" title="Tailwind v3 Equivalent">
          <p>
            Tailwind v3 commonly stored theme customization in
            <code className="text-pink-300"> tailwind.config.js</code>. The idea
            is the same; v4 moves the customization into CSS.
          </p>

          <CodeBlock>{`// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        brand: "#7c3aed",
      },
    },
  },
};`}</CodeBlock>

          <p>
            In v4, use <code className="text-pink-300">@theme</code> instead.
          </p>
        </Section>

        <Section id="remember" title="What to Remember">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>
              <code className="text-pink-300">@theme</code> stores reusable
              design tokens.
            </li>
            <li>Theme tokens can create utility classes automatically.</li>
            <li>
              The same tokens can be read directly with{" "}
              <code className="text-pink-300">var(--token)</code>.
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default ThemeVariable;
