import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const EnquiryForm = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    address: '',
    shiftingDate: '',
    relocationType: '',
    homeBHK: '',
    officeArea: '',
    shopType: '',
    shopArea: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.mobile.trim()) err.mobile = 'Mobile number is required';
    else if (!/^[0-9]{10}$/.test(form.mobile)) err.mobile = 'Enter a valid 10-digit number';
    if (!form.address.trim()) err.address = 'Address is required';
    if (!form.shiftingDate) err.shiftingDate = 'Shifting date & time is required';
    if (!form.relocationType) err.relocationType = 'Select a relocation type';
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    let message = `Hello GBOOMBA! I have submitted an enquiry from the website:\n\n`;
    message += `*Customer Details:*\n`;
    message += `- Name: ${form.name}\n`;
    message += `- Mobile: ${form.mobile}\n`;
    message += `- Address: ${form.address}\n`;
    message += `- Shifting Date & Time: ${form.shiftingDate}\n\n`;
    message += `*Relocation Type:* ${
      form.relocationType === 'house' ? 'Old House to New House 🏠' :
      form.relocationType === 'office' ? 'Office Relocation 🏢' :
      form.relocationType === 'shop' ? 'Shop Relocation 🏪' : ''
    }\n`;
    if (form.relocationType === 'house' && form.homeBHK) message += `- Home BHK: ${form.homeBHK}\n`;
    if (form.relocationType === 'office' && form.officeArea) message += `- Office Area: ${form.officeArea} Sq.ft\n`;
    if (form.relocationType === 'shop') {
      if (form.shopType) message += `- Shop Type: ${form.shopType}\n`;
      if (form.shopArea) message += `- Shop Area: ${form.shopArea} Sq.ft\n`;
    }
    const waUrl = `https://wa.me/918111002100?text=${encodeURIComponent(message)}`;
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      setForm({
        name: '', mobile: '', address: '', shiftingDate: '', relocationType: '', homeBHK: '', officeArea: '', shopType: '', shopArea: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-slate-900/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/10 text-white">
      <div className="mb-4"><div className="text-xs uppercase font-extrabold tracking-widest text-teal-400">NEED AN Emergency / QUOTATION?</div></div>
      <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-5">
        <div className="flex items-center gap-2 text-red-400 font-bold mb-1"><span>🚨</span><span className="text-sm uppercase tracking-wider">EMERGENCY SERVICE</span></div>
        <p className="text-xs text-gray-300 mb-2">Call Our Team: <a href="tel:918111002100" className="font-extrabold hover:underline text-white">📞 81 1100 2100</a></p>
        <ul className="space-y-1 text-[11px] text-gray-300 font-medium">
          <li className="flex items-center gap-1.5"><span className="text-teal-400">✅</span> Quick site visit after receiving your enquiry.</li>
          <li className="flex items-center gap-1.5"><span className="text-teal-400">✅</span> Immediate support from our expert team.</li>
          <li className="flex items-center gap-1.5"><span className="text-teal-400">✅</span> Work starts within 10 minutes of your confirmation.</li>
        </ul>
      </div>
      <div className="border-t border-white/10 pt-4 mb-4">
        <div className="flex items-center gap-2 text-teal-400 font-bold mb-1"><span>📋</span><span className="text-sm uppercase tracking-wider">QUOTATION / ENQUIRY FORM</span></div>
        <p className="text-[11px] text-gray-400">Our team will contact you shortly after receiving your enquiry.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">CUSTOMER DETAILS</div>
        <div>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className={`w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-white ${errors.name ? 'border-red-500' : 'border-white/15'}`} />
          {errors.name && <p className="text-red-500 text-[10px] mt-0.5">{errors.name}</p>}
        </div>
        <div>
          <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" maxLength="10" className={`w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-white ${errors.mobile ? 'border-red-500' : 'border-white/15'}`} />
          {errors.mobile && <p className="text-red-500 text-[10px] mt-0.5">{errors.mobile}</p>}
        </div>
        <div>
          <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" className={`w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-white ${errors.address ? 'border-red-500' : 'border-white/15'}`} />
          {errors.address && <p className="text-red-500 text-[10px] mt-0.5">{errors.address}</p>}
        </div>
        <div>
          <label className="block text-[11px] font-semibold text-gray-400 mb-1">Shifting Date & Time</label>
          <input type="datetime-local" name="shiftingDate" value={form.shiftingDate} onChange={handleChange} className={`w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-white ${errors.shiftingDate ? 'border-red-500' : 'border-white/15'}`} />
          {errors.shiftingDate && <p className="text-red-500 text-[10px] mt-0.5">{errors.shiftingDate}</p>}
        </div>
        <div className="border-t border-white/10 pt-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">RELOCATION TYPE</div>
          <div className="space-y-2">
            {[{ value: 'house', label: 'Old House to New House' }, { value: 'office', label: 'Office Relocation' }, { value: 'shop', label: 'Shop Relocation' }].map(opt => (
              <div key={opt.value} className="flex items-center">
                <input type="radio" name="relocationType" value={opt.value} checked={form.relocationType === opt.value} onChange={handleChange} className="mr-2" />
                <span className="text-sm text-gray-200">{opt.label}</span>
              </div>
            ))}
          </div>
        </div>
        {form.relocationType === 'house' && (
          <div>
            <input type="text" name="homeBHK" value={form.homeBHK} onChange={handleChange} placeholder="Home BHK" className="w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm text-white" />
          </div>
        )}
        {form.relocationType === 'office' && (
          <div>
            <input type="text" name="officeArea" value={form.officeArea} onChange={handleChange} placeholder="Office Area (Sq.ft)" className="w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm text-white" />
          </div>
        )}
        {form.relocationType === 'shop' && (
          <>
            <div>
              <input type="text" name="shopType" value={form.shopType} onChange={handleChange} placeholder="Shop Type" className="w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm text-white" />
            </div>
            <div>
              <input type="text" name="shopArea" value={form.shopArea} onChange={handleChange} placeholder="Shop Area (Sq.ft)" className="w-full bg-white/5 border px-3.5 py-2 rounded-lg text-sm text-white" />
            </div>
          </>
        )}
        <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 rounded-lg transition-colors mt-4">Submit</button>
      </form>
    </div>
  );
};

export default EnquiryForm;
