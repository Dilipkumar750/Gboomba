import React from 'react';
import EnquiryForm from '../../Components/EnquiryForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12">
      <div className="max-w-3xl w-full px-4">
        <EnquiryForm />
      </div>
    </div>
  );
};

export default Contact;