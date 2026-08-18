import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const typographyUtilities = [
  ["font-sans / font-serif / font-mono", "font-family", "Choose the font family."],
  ["text-sm / text-lg / text-4xl", "font-size", "Set text size from the typography scale."],
  ["antialiased / subpixel-antialiased", "font-smoothing", "Control text rendering."],
  ["italic / not-italic", "font-style", "Italic or normal text."],
  ["font-thin → font-black", "font-weight", "Control weight; e.g. normal=400, bold=700."],
  ["font-stretch-condensed", "font-stretch", "Compress or expand glyphs; needs a suitable variable font."],
  ["tabular-nums / oldstyle-nums", "font-variant-numeric", "Change how numbers are rendered."],
  ["[font-feature-settings:'ss01']", "font-feature-settings", "Enable specific OpenType features."],
  ["tracking-tight / tracking-wide", "letter-spacing", "Control spacing between characters."],
  ["line-clamp-3", "line-clamp", "Limit text to a fixed number of lines."],
  ["leading-tight / leading-loose / leading-6", "line-height", "Control vertical space between lines."],
  ["list-image-[url(...)]", "list-style-image", "Use a custom image as the list marker."],
  ["list-inside / list-outside", "list-style-position", "Place the marker inside or outside the list box."],
  ["list-disc / list-decimal / list-none", "list-style-type", "Choose the marker style."],
  ["text-left / text-center / text-right / text-justify", "text-align", "Align text."],
  ["text-red-500", "color", "Set text color."],
  ["underline / line-through / no-underline", "text-decoration-line", "Add or remove text decoration."],
  ["decoration-blue-500", "text-decoration-color", "Set decoration color."],
  ["decoration-wavy / decoration-dotted", "text-decoration-style", "Choose decoration style."],
  ["decoration-2 / decoration-4", "text-decoration-thickness", "Set decoration thickness."],
  ["underline-offset-4", "text-underline-offset", "Move an underline away from the text."],
  ["uppercase / lowercase / capitalize", "text-transform", "Transform letter casing."],
  ["truncate", "text-overflow", "One-line clipping with an ellipsis."],
  ["text-wrap / text-nowrap / text-balance / text-pretty", "text-wrap", "Control line wrapping; balance is useful for headings."],
  ["indent-4", "text-indent", "Indent the first line."],
  ["tab-4", "tab-size", "Set tab character width."],
  ["align-middle / align-top", "vertical-align", "Align inline/table content vertically."],
  ["whitespace-nowrap / whitespace-pre", "white-space", "Control whitespace collapsing and wrapping."],
  ["break-all / break-normal", "word-break", "Control where words can break."],
  ["wrap-break-word", "overflow-wrap", "Allow long unbroken words to wrap."],
  ["hyphens-auto", "hyphens", "Allow automatic hyphenation at line breaks."],
  ["content-['→'] / content-none", "content", "Set or remove pseudo-element content."],
];

function Typography() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Typography</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Tailwind gives you utilities for font, size, weight, spacing, wrapping,
        decoration, alignment, and more.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="typography-reference" title="Typography Utilities">
          <Table
            headers={["Tailwind", "CSS", "Use"]}
            rows={typographyUtilities}
          />
        </Section>

        <Section id="font-basics" title="Font Basics">
          <CodeBlock>{`<h1 class="font-sans text-4xl font-bold">
  Sans heading
</h1>

<p class="font-serif italic">
  Serif text
</p>

<code class="font-mono">
  terminal-style text
</code>`}</CodeBlock>
        </Section>

        <Section id="size-weight" title="Size & Weight">
          <p>
            <code className="text-pink-300">text-*</code> controls font size.
            <code className="text-pink-300">font-*</code> controls weight.
          </p>

          <CodeBlock>{`<h1 class="text-4xl font-bold">
  Large heading
</h1>

<p class="text-sm font-medium">
  Small supporting text
</p>`}</CodeBlock>
        </Section>

        <Section id="line-height" title="Line Height & Letter Spacing">
          <CodeBlock>{`<p class="leading-relaxed tracking-wide">
  Comfortable reading with extra spacing.
</p>

<h2 class="leading-tight tracking-tight">
  Compact heading
</h2>`}</CodeBlock>

          <Note>
            Keep <code className="text-pink-300">leading-*</code> and{" "}
            <code className="text-pink-300">tracking-*</code> separate from
            font size so you can tune typography independently.
          </Note>
        </Section>

        <Section id="alignment" title="Text Alignment & Wrapping">
          <CodeBlock>{`<h1 class="text-center text-balance">
  A heading that wraps evenly
</h1>

<p class="text-left text-pretty">
  Text with controlled wrapping.
</p>

<span class="whitespace-nowrap">
  Never wrap this
</span>`}</CodeBlock>

          <Table
            headers={["Utility", "Use"]}
            rows={[
              ["text-left / center / right / justify", "Horizontal text alignment."],
              ["text-balance", "Balances line lengths, especially useful for headings."],
              ["text-pretty", "Improves wrapping for readable prose."],
              ["text-nowrap", "Prevents wrapping."],
              ["whitespace-nowrap", "Keeps whitespace collapsed but prevents wrapping."],
            ]}
          />
        </Section>

        <Section id="decoration" title="Text Decoration">
          <CodeBlock>{`<a class="underline decoration-blue-500 decoration-2 underline-offset-4">
  Styled link
</a>

<a class="underline decoration-wavy">
  Wavy underline
</a>`}</CodeBlock>

          <Table
            headers={["Utility", "Controls"]}
            rows={[
              ["underline / line-through / no-underline", "Decoration line."],
              ["decoration-blue-500", "Decoration color."],
              ["decoration-wavy / dotted", "Decoration style."],
              ["decoration-2 / decoration-4", "Decoration thickness."],
              ["underline-offset-4", "Distance between text and underline."],
            ]}
          />
        </Section>

        <Section id="lists" title="Lists">
          <CodeBlock>{`<ul class="list-disc list-inside">
  <li>First</li>
  <li>Second</li>
</ul>

<ol class="list-decimal list-outside">
  <li>First</li>
  <li>Second</li>
</ol>`}</CodeBlock>
        </Section>

        <Section id="clamp" title="Truncating Text">
          <CodeBlock>{`<p class="text-gray-600 leading-relaxed line-clamp-3">
  Long text that stops after three lines...
</p>

<p class="truncate">
  Long text stays on one line and gets an ellipsis.
</p>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">truncate</code> is for one line.
            <code className="text-pink-300">line-clamp-3</code> limits the text
            to three lines.
          </Note>
        </Section>

        <Section id="numbers" title="Numbers & Font Features">
          <CodeBlock>{`<div class="tabular-nums">
  2026
  1234
</div>

<span class="[font-feature-settings:'ss01']">
  OpenType feature
</span>`}</CodeBlock>

          <p>
            Numeric variants can improve alignment in tables, while arbitrary
            font-feature settings expose OpenType features not covered by a
            standard utility.
          </p>
        </Section>

        <Section id="content" title="Pseudo-element Content">
          <p>
            The <code className="text-pink-300">content-*</code> utilities set
            the generated content used by <code className="text-pink-300">before:</code>{" "}
            or <code className="text-pink-300">after:</code>.
          </p>

          <CodeBlock>{`<span class="after:content-['→']">
  Next
</span>

<span class="after:content-none">
  No generated content
</span>`}</CodeBlock>
        </Section>

        <Section id="typography-example" title="Putting It Together">
          <CodeBlock>{`<h1 class="text-4xl font-bold tracking-tight text-balance">
  A heading that wraps evenly
</h1>

<p class="text-gray-600 leading-relaxed line-clamp-3">
  Long paragraph text that gets cut off after three lines.
</p>

<a class="underline decoration-blue-500 decoration-2 underline-offset-4 hover:decoration-wavy">
  A styled link
</a>`}</CodeBlock>
        </Section>
      </div>
    </div>
  );
}

export default Typography;