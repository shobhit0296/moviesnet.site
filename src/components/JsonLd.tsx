export default function JsonLd({ schema }: { schema: Record<string, unknown> | Array<Record<string, unknown>> }) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
