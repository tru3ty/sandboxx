import { useEffect, useState } from "react";
import { BundledLanguage, codeToHtml } from "shiki";

interface Props {
  children: string;
  lang?: BundledLanguage;
}

export function CodeBlock(props: Props) {
  const [out, setOut] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const html = await codeToHtml(props.children, {
        lang: props.lang ?? "typescript",
        theme: "vitesse-dark",
      });
      setOut(html);
    };
    fetchData();
  }, [props.children, props.lang]);

  return (
    <div
      className='*:py-4 *:px-2 rounded-xl *:overflow-x-scroll overflow-y-scroll max-h-10/12'
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}
