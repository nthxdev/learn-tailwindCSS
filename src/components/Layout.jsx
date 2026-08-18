import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const layoutUtilities = [
  [
    "aspect-square / aspect-video / aspect-[4/3]",
    "aspect-ratio",
    "Keep an element at a fixed width-to-height ratio.",
  ],
  [
    "columns-3 / columns-sm",
    "columns",
    "Split text into multiple CSS columns.",
  ],
  [
    "break-after-column / break-before-page / break-inside-avoid",
    "break-*",
    "Control where content can break across columns or pages.",
  ],
  [
    "box-decoration-clone / box-decoration-slice",
    "box-decoration-break",
    "Control how a wrapped inline background or border is split.",
  ],
  [
    "box-border / box-content",
    "box-sizing",
    "Choose whether padding and borders are included in the set size.",
  ],
  [
    "block / inline-block / inline / flex / inline-flex / grid / hidden / table",
    "display",
    "Choose how the element participates in layout.",
  ],
  [
    "float-left / float-right / float-none",
    "float",
    "Float an element so surrounding text can wrap around it.",
  ],
  [
    "clear-left / clear-right / clear-both",
    "clear",
    "Stop an element from wrapping around floated elements.",
  ],
  [
    "isolate",
    "isolation",
    "Create a new stacking context and contain z-index interactions.",
  ],
  [
    "object-cover / object-contain / object-fill",
    "object-fit",
    "Control how an image or video fills its box.",
  ],
  [
    "object-center / object-top",
    "object-position",
    "Choose the visible focal point when media is cropped.",
  ],
  [
    "overflow-hidden / overflow-auto / overflow-scroll / overflow-x-auto",
    "overflow",
    "Control content that does not fit inside its box.",
  ],
  [
    "overscroll-contain / overscroll-none",
    "overscroll-behavior",
    "Control how scrolling continues into a parent container.",
  ],
  [
    "static / relative / absolute / fixed / sticky",
    "position",
    "Choose the element's positioning mode.",
  ],
  [
    "top-0 / right-4 / bottom-2 / left-1/2 / inset-0 / inset-x-0",
    "top / right / bottom / left",
    "Set offsets for positioned elements.",
  ],
  [
    "visible / invisible",
    "visibility",
    "Show or hide an element while keeping its layout space.",
  ],
  [
    "z-10 / z-50 / -z-10",
    "z-index",
    "Control which overlapping element appears on top.",
  ],
];

function Layout() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Layout</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        The main Tailwind utilities for positioning, sizing, display, overflow,
        stacking, and media layout.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="layout-pattern" title="The Pattern">
          <p>
            Most layout utilities follow{" "}
            <code className="text-pink-300">property-value</code>.
          </p>

          <CodeBlock>{`aspect-video
object-cover
overflow-hidden
relative
z-10`}</CodeBlock>

          <Note>
            Learn what the CSS property does first. The Tailwind class is then
            just a shorter way to write it.
          </Note>
        </Section>

        <Section id="layout-reference" title="Layout Utilities">
          <Table headers={["Tailwind", "CSS", "Use"]} rows={layoutUtilities} />
        </Section>

        <Section id="display" title="Display">
          <p>
            <code className="text-pink-300">display</code> decides how an
            element participates in layout.
          </p>

          <CodeBlock>{`<div class="block">Block</div>
<span class="inline">Inline</span>

<div class="flex">Flex parent</div>
<div class="grid">Grid parent</div>

<div class="hidden">Not rendered in layout</div>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">hidden</code> uses{" "}
            <code className="text-pink-300">display: none</code>, so it removes
            the element from layout entirely.
          </Note>
        </Section>

        <Section id="position" title="Positioning">
          <p>
            Positioning utilities usually work together: choose a{" "}
            <code className="text-pink-300">position</code>, then add offsets.
          </p>

          <CodeBlock>{`<div class="relative">
  <button class="absolute top-2 right-2">
    Close
  </button>
</div>

<div class="fixed inset-0">
  Full viewport
</div>`}</CodeBlock>

          <Table
            headers={["Class", "Meaning"]}
            rows={[
              [
                "relative",
                "Creates a positioning anchor for absolute children.",
              ],
              [
                "absolute",
                "Positions relative to the nearest positioned ancestor.",
              ],
              ["fixed", "Positions relative to the viewport."],
              [
                "sticky",
                "Stays in normal flow until its scroll threshold is reached.",
              ],
              ["inset-0", "Sets top, right, bottom, and left to 0."],
            ]}
          />
        </Section>

        <Section id="object" title="Images & Video">
          <p>
            Use <code className="text-pink-300">object-*</code> to control media
            inside a fixed box.
          </p>

          <CodeBlock>{`<img
  class="w-full aspect-video object-cover rounded-lg"
  src="cover.jpg"
/>`}</CodeBlock>

          <Table
            headers={["Class", "Effect"]}
            rows={[
              ["object-cover", "Fills the box and crops excess content."],
              ["object-contain", "Shows the whole image inside the box."],
              ["object-fill", "Stretches the media to fill the box."],
              ["object-center", "Keeps the crop centered."],
              ["object-top", "Moves the visible focal point toward the top."],
            ]}
          />
        </Section>

        <Section id="overflow" title="Overflow">
          <p>
            <code className="text-pink-300">overflow-*</code> controls what
            happens when content is larger than its box.
          </p>

          <CodeBlock>{`<div class="overflow-hidden">
  Extra content is clipped.
</div>

<div class="overflow-auto">
  Scroll only when needed.
</div>`}</CodeBlock>

          <Table
            headers={["Class", "Effect"]}
            rows={[
              ["overflow-visible", "Content can spill outside the box."],
              ["overflow-hidden", "Clips content with no scrollbar."],
              ["overflow-auto", "Adds scrollbars only when needed."],
              ["overflow-scroll", "Always provides scrolling."],
              ["overflow-x-auto", "Scrolls horizontally when needed."],
            ]}
          />
        </Section>

        <Section id="aspect" title="Aspect Ratio">
          <p>
            <code className="text-pink-300">aspect-*</code> keeps the shape of
            an element consistent as its width changes.
          </p>

          <CodeBlock>{`<div class="aspect-square">1:1</div>

<div class="aspect-video">
  16:9
</div>

<div class="aspect-[4/3]">
  4:3
</div>`}</CodeBlock>

          <Note>
            This is especially useful for images, videos, thumbnails, and media
            cards that must keep a predictable shape.
          </Note>
        </Section>

        <Section id="stacking" title="Stacking & z-index">
          <p>
            <code className="text-pink-300">z-*</code> controls stacking order
            when elements overlap.
          </p>

          <CodeBlock>{`<div class="relative z-10">
  Above
</div>

<div class="relative z-0">
  Below
</div>`}</CodeBlock>

          <Note>
            A higher z-index does not automatically beat every other element.
            Stacking contexts can limit how far it can move.
          </Note>
        </Section>

        <Section id="visibility" title="Visibility">
          <Table
            headers={["Class", "Effect"]}
            rows={[
              ["visible", "Element is visible."],
              ["invisible", "Element is hidden but still takes up space."],
              ["hidden", "Element is removed from layout."],
            ]}
          />

          <CodeBlock>{`<div class="invisible">
  Space remains.
</div>

<div class="hidden">
  No layout space.
</div>`}</CodeBlock>
        </Section>

        <Section id="box-sizing" title="Box Sizing">
          <p>
            <code className="text-pink-300">box-border</code> includes padding
            and borders inside the declared width and height.{" "}
            <code className="text-pink-300">box-content</code> does not.
          </p>

          <CodeBlock>{`<div class="box-border w-64 p-4">
  256px includes padding
</div>

<div class="box-content w-64 p-4">
  256px is content only
</div>`}</CodeBlock>
        </Section>

        <Section id="float-clear" title="Float & Clear">
          <p>
            These are mainly useful for text flowing around content, especially
            in older or document-style layouts.
          </p>

          <CodeBlock>{`<img class="float-left mr-4" src="photo.jpg" />

<p>
  Text wraps around the floated image.
</p>

<div class="clear-both"></div>`}</CodeBlock>
        </Section>

        <Section id="isolate" title="Isolation">
          <p>
            <code className="text-pink-300">isolate</code> creates a new
            stacking context for the element.
          </p>

          <CodeBlock>{`<div class="relative isolate">
  <div class="absolute z-50">
    Stacking stays inside this area.
  </div>
</div>`}</CodeBlock>

          <Note>
            Reach for this when z-index interactions become hard to reason about
            across separate parts of the page.
          </Note>
        </Section>

        <Section id="overscroll" title="Overscroll Behavior">
          <p>
            Use <code className="text-pink-300">overscroll-*</code> when a
            scrollable area should not pass its scrolling into the parent.
          </p>

          <CodeBlock>{`<div class="overflow-auto overscroll-contain">
  Scroll stays in this panel.
</div>`}</CodeBlock>
        </Section>

        <Section id="modal" title="Putting It Together">
          <CodeBlock>{`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
  <div class="relative rounded-xl bg-white p-6">
    <button class="absolute top-2 right-2">✕</button>

    <h2 class="text-xl font-semibold">
      Modal
    </h2>
  </div>
</div>`}</CodeBlock>

          <p>
            The important pieces are{" "}
            <code className="text-pink-300">fixed</code> +{" "}
            <code className="text-pink-300">inset-0</code> for the full overlay,
            flex utilities for centering, and{" "}
            <code className="text-pink-300">relative</code> on the modal so the
            close button can use <code className="text-pink-300">absolute</code>
            positioning.
          </p>
        </Section>

        <Section id="media-example" title="Responsive Media Example">
          <CodeBlock>{`<img
  class="w-full aspect-video object-cover rounded-lg"
  src="cover.jpg"
  alt="Cover"
/>`}</CodeBlock>

          <p>
            The width follows the parent, the ratio stays 16:9, and{" "}
            <code className="text-pink-300">object-cover</code> prevents
            distortion.
          </p>
        </Section>
      </div>
    </div>
  );
}

export default Layout;
