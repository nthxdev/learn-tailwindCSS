import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Section from "./common/Section";
import Table from "./common/Table";

const interactionUtilities = [
  ["accent-purple-500", "accent-color", "Color checkboxes, radios, and range controls."],
  ["appearance-none", "appearance", "Remove native browser styling for custom controls."],
  ["caret-pink-500", "caret-color", "Set the blinking text cursor color."],
  ["scheme-light / scheme-dark", "color-scheme", "Tell the browser which native color scheme to use."],
  ["cursor-pointer / cursor-not-allowed / cursor-wait", "cursor", "Choose the mouse cursor."],
  ["field-sizing-content", "field-sizing", "Let a textarea size itself from its content."],
  ["pointer-events-none / pointer-events-auto", "pointer-events", "Allow clicks through or restore pointer interaction."],
  ["resize / resize-none / resize-y", "resize", "Control textarea resizing."],
  ["scroll-smooth", "scroll-behavior", "Smooth scrolling to anchors."],
  ["scrollbar-thin / scrollbar-color-*", "scrollbar", "Style scrollbar size and color."],
  ["scrollbar-none", "scrollbar-width", "Hide the scrollbar while keeping scrolling possible."],
  ["scrollbar-gutter-stable", "scrollbar-gutter", "Reserve scrollbar space to avoid layout shifts."],
  ["scroll-m-4", "scroll-margin", "Offset an element when reached by scrolling."],
  ["scroll-p-4", "scroll-padding", "Set inner scroll offsets."],
  ["snap-start / snap-center", "scroll-snap-align", "Choose where an item snaps."],
  ["snap-always", "scroll-snap-stop", "Prevent the browser from skipping a snap point."],
  ["snap-x / snap-y / snap-mandatory", "scroll-snap-type", "Enable and configure scroll snapping."],
  ["touch-none / touch-pan-x", "touch-action", "Control browser touch gestures."],
  ["select-none / select-text / select-all", "user-select", "Control text selection."],
  ["will-change-transform", "will-change", "Hint that a transform is about to change."],
];

function Interactivity() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Interactivity</h1>

      <p className="text-center text-white/60 -mt-4 mb-4 max-w-2xl px-4">
        Utilities for controls, cursors, scrolling, touch behavior, selection,
        and interaction performance.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="interaction-reference" title="Interaction Utilities">
          <Table
            headers={["Tailwind", "CSS", "Use"]}
            rows={interactionUtilities}
          />
        </Section>

        <Section id="controls" title="Form Controls">
          <CodeBlock>{`<input className="accent-purple-500 caret-pink-500" />

<select className="appearance-none">
  <option>Custom select</option>
</select>

<textarea className="field-sizing-content resize-none border rounded p-2" />`}</CodeBlock>

          <Table
            headers={["Utility", "Purpose"]}
            rows={[
              ["accent-purple-500", "Color native form controls."],
              ["caret-pink-500", "Color the text cursor."],
              ["appearance-none", "Remove default browser styling."],
              ["field-sizing-content", "Size a textarea from its content."],
              ["resize-none", "Prevent manual resizing."],
            ]}
          />
        </Section>

        <Section id="cursor-pointer" title="Cursor & Pointer Events">
          <CodeBlock>{`<button className="cursor-pointer">
  Click me
</button>

<div className="pointer-events-none">
  Mouse events pass through this element.
</div>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">pointer-events-none</code> is useful
            for decorative overlays that should not block interaction with the
            content underneath.
          </Note>
        </Section>

        <Section id="selection" title="Text Selection">
          <CodeBlock>{`<div className="select-none">
  Cannot be selected
</div>

<p className="select-all">
  Selecting this picks the whole text.
</p>`}</CodeBlock>

          <Table
            headers={["Utility", "Effect"]}
            rows={[
              ["select-none", "Prevent text selection."],
              ["select-text", "Allow normal text selection."],
              ["select-all", "Select the whole element's text at once."],
            ]}
          />
        </Section>

        <Section id="smooth-scroll" title="Smooth Scrolling">
          <CodeBlock>{`<html className="scroll-smooth">
  ...
</html>`}</CodeBlock>

          <p>
            This makes anchor-link jumps scroll smoothly instead of jumping
            instantly.
          </p>
        </Section>

        <Section id="snap" title="Scroll Snap">
          <CodeBlock>{`<div className="flex overflow-x-auto snap-x snap-mandatory gap-4">
  <img className="snap-center w-80 shrink-0" src="1.jpg" alt="" />
  <img className="snap-center w-80 shrink-0" src="2.jpg" alt="" />
</div>`}</CodeBlock>

          <Table
            headers={["Utility", "Purpose"]}
            rows={[
              ["snap-x", "Snap horizontally."],
              ["snap-y", "Snap vertically."],
              ["snap-mandatory", "Require the scroll position to settle on a snap point."],
              ["snap-center", "Center each item at its snap position."],
              ["snap-start", "Align the item's start edge."],
              ["snap-always", "Do not skip the snap point."],
            ]}
          />
        </Section>

        <Section id="touch" title="Touch Behavior">
          <CodeBlock>{`<div className="touch-pan-x overflow-x-auto">
  Horizontal touch scrolling
</div>`}</CodeBlock>

          <p>
            <code className="text-pink-300">touch-action</code> controls which
            browser gestures are allowed on the element.
          </p>
        </Section>

        <Section id="scrollbar" title="Scrollbar & Scroll Offsets">
          <CodeBlock>{`<div className="scrollbar-thin overflow-auto">
  Scrollable content
</div>

<section id="features" className="scroll-m-4">
  Features
</section>`}</CodeBlock>

          <p>
            Scroll utilities can control scrollbar appearance and create extra
            space when an element is reached by anchor or snap scrolling.
          </p>
        </Section>

        <Section id="will-change" title="Animation Performance Hint">
          <CodeBlock>{`<div className="will-change-transform hover:scale-105 transition-transform">
  Animated element
</div>`}</CodeBlock>

          <Note>
            <code className="text-pink-300">will-change-transform</code> is a
            hint, not a requirement. Use it when you know a transform is about
            to animate; do not add it everywhere.
          </Note>
        </Section>
      </div>
    </div>
  );
}

export default Interactivity;