import Section from "./common/Section";
import CodeBlock from "./common/CodeBlock";
import Note from "./common/Note";
import Table from "./common/Table";

const sourceRules = [
  ["Write complete classes", "Tailwind can detect literal utility names in your source."],
  ["Avoid dynamic assembly", "A constructed class may not appear as a complete string to the scanner."],
  ["Use @source when needed", "Explicitly include, exclude, or generate classes when automatic detection is not enough."],
];

function DetectingClasses() {
  return (
    <div className="pages">
      <h1 className="pages-tittle text-center">Detecting Classes in Source Files</h1>

      <p className="text-white/60 -mt-4 mb-4 text-center max-w-2xl px-4">
        Tailwind scans your project files and generates CSS for utility classes it can
        detect in the source.
      </p>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 pb-24">
        <Section id="scanning" title="How Class Detection Works">
          <p>
            During the build, Tailwind scans files such as
            <code className="text-pink-300"> .html</code>,
            <code className="text-pink-300"> .jsx</code>, and
            <code className="text-pink-300"> .vue</code>. It generates CSS for utility
            classes it can recognize as text.
          </p>

          <Note>
            Tailwind does not run your application to discover every possible class.
            The complete utility should be detectable in the source.
          </Note>
        </Section>

        <Section id="dynamic" title="Do Not Build Classes Dynamically">
          <p>
            Avoid constructing utilities by joining strings. A complete class can become
            invisible to the scanner when it is assembled from separate variables.
          </p>

          <CodeBlock>{`// Avoid
const color = "red";
const className = \`text-\${color}-500\`;`}</CodeBlock>

          <p>
            Write complete class names as explicit values instead.
          </p>

          <CodeBlock>{`// Better
const className =
  color === "red"
    ? "text-red-500"
    : "text-blue-500";`}</CodeBlock>
        </Section>

        <Section id="rules" title="Simple Rules">
          <Table headers={["Rule", "Why"]} rows={sourceRules} />
        </Section>

        <Section id="source" title="Controlling Source Scanning">
          <p>
            Tailwind v4 normally discovers source files automatically. Use
            <code className="text-pink-300"> @source</code> when you need to control what
            gets scanned.
          </p>

          <CodeBlock>{`@import "tailwindcss";

@source "../node_modules/@my-org/ui-lib";
@source not "./src/legacy";
@source inline("bg-red-{50,100,200,300}");`}</CodeBlock>

          <ul className="list-disc list-inside flex flex-col gap-2">
            <li><b>@source:</b> include another folder in scanning.</li>
            <li><b>@source not:</b> exclude a folder from scanning.</li>
            <li><b>@source inline:</b> force-generate utilities not present as source text.</li>
          </ul>
        </Section>

        <Section id="react-example" title="React Example">
          <p>
            Conditional classes are fine. The important part is that the complete utility
            names remain visible in the source.
          </p>

          <CodeBlock>{`const buttonClass = active
  ? "bg-blue-500 text-white"
  : "bg-gray-200 text-black";`}</CodeBlock>
        </Section>

        <Section id="remember" title="What to Remember">
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li>Keep utility class names detectable in your source.</li>
            <li>Avoid assembling utility names with string interpolation.</li>
            <li>Use complete conditional class strings instead.</li>
            <li>Use <code className="text-pink-300">@source</code> when automatic detection needs help.</li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

export default DetectingClasses;