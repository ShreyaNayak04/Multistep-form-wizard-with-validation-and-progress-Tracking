import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';

const ReviewStep = ({ onBack, onSubmit, loading }) => {
  const { formData, profileImage } = useFormContext();
  const [submitted, setSubmitted] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  React.useEffect(() => {
    if (profileImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(profileImage);
    }
  }, [profileImage]);

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
        {imagePreview && (
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <img src={imagePreview} alt="Profile" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #667eea' }} />
          </div>
        )}
        <h4>Personal Info</h4>
        <div>Full Name: <b>{formData.personalInfo.fullName}</b></div>
        <div>Email: <b>{formData.personalInfo.email}</b></div>
        <div>Mobile: <b>{formData.personalInfo.mobile}</b></div>
        <div>Gender: <b>{formData.personalInfo.gender}</b></div>
        <div>Date of Birth: <b>{formData.personalInfo.dob}</b></div>
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
