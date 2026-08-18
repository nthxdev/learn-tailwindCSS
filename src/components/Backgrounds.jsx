import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const backgroundUtilities = [
  ["bg-fixed / bg-local / bg-scroll", "background-attachment", "Control how the background moves during scrolling."],
  ["bg-clip-border / bg-clip-text", "background-clip", "Control where the background is painted."],
  ["bg-white / bg-blue-500/50", "background-color", "Set the background color and opacity."],
  ["bg-[url(...)] / bg-linear-to-r", "background-image", "Use an image or gradient as the background."],
  ["bg-origin-border / bg-origin-padding", "background-origin", "Choose the box used as the background's starting area."],
  ["bg-center / bg-top / bg-[50%_25%]", "background-position", "Choose the background's focal position."],
  ["bg-no-repeat / bg-repeat-x", "background-repeat", "Control whether the background repeats."],
  ["bg-cover / bg-contain / bg-auto", "background-size", "Control how the background image fits its box."],
];

function Backgrounds() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Backgrounds</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Control background colors, images, gradients, positioning, repeating,
        and sizing.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="background-reference" title="Background Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={backgroundUtilities} />
        </Section>

        <Section id="gradient-text" title="Gradient Text">
          <p>
            Clip a gradient to the text, then make the actual text transparent.
          </p>

          <CodeBlock>{`<h1 className="bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl font-bold">
  Gradient Heading
</h1>`}</CodeBlock>

          <Note>
            The key combination is{" "}
            <code className="text-pink-300">bg-clip-text</code> + a gradient +
            <code className="text-pink-300">text-transparent</code>.
          </Note>
        </Section>

        <Section id="hero-background" title="Background Image">
          <CodeBlock>{`<section className="bg-[url('/hero.jpg')] bg-cover bg-center h-96">
  Hero content
</section>`}</CodeBlock>

          <Table
            headers={["Utility", "Effect"]}
            rows={[
              ["bg-cover", "Fills the box and may crop the image."],
              ["bg-contain", "Shows the whole image inside the box."],
              ["bg-center", "Centers the background image."],
              ["bg-no-repeat", "Prevents tiling."],
            ]}
          />
        </Section>

        <Section id="background-position" title="Position & Repeat">
          <CodeBlock>{`<div className="bg-[url('/pattern.svg')] bg-top bg-repeat-x">
  Content
</div>`}</CodeBlock>

          <p>
            Use <code className="text-pink-300">bg-*</code> position utilities
            when the important part of an image needs to stay visible.
          </p>
        </Section>

        <Section id="background-clip" title="Background Clip">
          <CodeBlock>{`<h1 className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  Gradient text
</h1>`}</CodeBlock>

          <p>
            <code className="text-pink-300">bg-clip-text</code> clips the
            background to the shape of the text instead of the whole element.
          </p>
        </Section>
      </div>
    </div>
  );
}

export default Backgrounds;