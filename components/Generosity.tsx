export default function Generosity() {
  return (
    <section id="generosity" className="relative py-32 lg:py-40 overflow-hidden bg-neutral-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-block text-caption uppercase font-semibold tracking-[0.2em] text-primary-800 mb-6">
          Give Online
        </span>
        <h2 className="font-display text-display-sm md:text-display-md text-neutral-900 mb-6">
          Support the <span className="text-gradient-primary">Kingdom</span>
        </h2>
        <p className="text-body-lg text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto">
          "Bring the whole tithe into the storehouse..." — Malachi 3:10. Your generosity enables Kingdom Insights Ministries to spread the Gospel and build the Kingdom of God.
        </p>
        <iframe
          src="https://give.tithe.ly/?formId=4a3a9c26-b54a-4b76-bc6d-f187ac5e25af"
          width="100%"
          height="650"
          frameBorder="0"
          style={{ borderRadius: '24px', border: '1px solid #e5e7eb' }}
        />
      </div>
    </section>
  );
}
