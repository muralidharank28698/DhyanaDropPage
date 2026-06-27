'use client';

export function PropertySubmissionForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="label">Property Name</label>
        <input type="text" className="input" placeholder="Villa Name" required />
      </div>
      <div>
        <label className="label">Location</label>
        <input type="text" className="input" placeholder="City, State" required />
      </div>
      <button className="btn btn-primary">Submit Property</button>
    </form>
  );
}
