'use client';

export function InvestorEnquiryForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="label">Full Name</label>
        <input type="text" className="input" placeholder="Your Name" required />
      </div>
      <div>
        <label className="label">Investment Capacity</label>
        <select className="input">
          <option>₹10L - ₹50L</option>
          <option>₹50L - ₹1Cr</option>
          <option>₹1Cr+</option>
        </select>
      </div>
      <button className="btn btn-gold">Submit Enquiry</button>
    </form>
  );
}
