import { useEffect } from "react";

type StructuredDataProps = {
  id: string;
  data: Record<string, unknown>;
};

const StructuredData = ({ id, data }: StructuredDataProps) => {
  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.text = JSON.stringify(data);

    return () => {
      script?.remove();
    };
  }, [data, id]);

  return null;
};

export default StructuredData;
