'use client';

export function BookingForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div style={{flex: 1}}><label className="label">Check In</label><input type="date" className="input" /></div>
        <div style={{flex: 1}}><label className="label">Check Out</label><input type="date" className="input" /></div>
      </div>
      <button className="btn btn-primary">Check Availability</button>
    </form>
  );
}
