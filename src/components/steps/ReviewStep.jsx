import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';

const ReviewStep = ({ onBack, onSubmit, loading }) => {
  const { formData } = useFormContext();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    await onSubmit();
    setSubmitted(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Review Your Information</h3>
      <div className="review-list">
        <h4>Personal Info</h4>
        <div>Full Name: <b>{formData.personalInfo.fullName}</b></div>
        <div>Email: <b>{formData.personalInfo.email}</b></div>
        <div>Mobile: <b>{formData.personalInfo.mobile}</b></div>
        <h4>Address Info</h4>
        <div>Address: <b>{formData.addressInfo.address}</b></div>
        <div>City: <b>{formData.addressInfo.city}</b></div>
        <div>State: <b>{formData.addressInfo.state}</b></div>
        <h4>Account Info</h4>
        <div>Username: <b>{formData.accountInfo.username}</b></div>
        <div>Password: <b>{formData.accountInfo.password ? '******' : ''}</b></div>
        <h4>Preferences</h4>
        <div>Account Type: <b>{formData.preferences.accountType}</b></div>
        <div>Newsletter: <b>{formData.preferences.newsletter ? 'Yes' : 'No'}</b></div>
        {formData.preferences.accountType === 'Business' && (
          <>
            <h4>Business Info</h4>
            <div>Company Name: <b>{formData.business.companyName}</b></div>
            <div>Company Size: <b>{formData.business.companySize}</b></div>
          </>
        )}
      </div>
      <div className="nav-buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit" disabled={loading || submitted}>
          {loading || submitted ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
};

export default ReviewStep;
