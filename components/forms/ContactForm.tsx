'use client';

export function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="label">Message</label>
        <textarea className="input textarea" placeholder="How can we help?" required />
      </div>
      <button className="btn btn-primary">Send Message</button>
    </form>
  );
}
