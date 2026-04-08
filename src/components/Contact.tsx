export default function Contact() {
  return (
    <section className="bg-charcoal px-6 py-32 sm:px-8 lg:px-12" id="contact">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-gray mb-6">Get In Touch</p>
        <h2 className="text-4xl font-semibold text-platinum sm:text-5xl mb-8">
          Ready to Transform Your Operations?
        </h2>
        <a
          href="mailto:contact@averon.io"
          className="inline-flex px-10 py-4 bg-platinum text-black font-semibold rounded-full hover:bg-silver transition-all"
        >
          Send us an Email
        </a>
      </div>
    </section>
  )
}
