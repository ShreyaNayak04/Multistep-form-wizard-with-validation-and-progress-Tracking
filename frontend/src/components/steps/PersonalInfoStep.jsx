import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';

const PersonalInfoStep = ({ onNext }) => {
  const { formData, updateForm, profileImage, setProfileImage } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData.personalInfo
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    updateForm('personalInfo', data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="profile-image-upload">
        <label htmlFor="profileImage" className="profile-label">
          {imagePreview ? (
            <img src={imagePreview} alt="Profile Preview" className="profile-preview" />
          ) : (
            <div className="profile-placeholder">
              <span>📷</span>
              <p>Upload Profile Image</p>
            </div>
          )}
        </label>
        <input
          id="profileImage"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>

      <input {...register('fullName', { required: 'Full name is required' })} placeholder="Full Name" />
      {errors.fullName && <span className="error">{errors.fullName.message}</span>}
      <input {...register('email', { required: 'Email is required', pattern: { value: /.+@.+\..+/, message: 'Invalid email' } })} placeholder="Email Address" />
      {errors.email && <span className="error">{errors.email.message}</span>}
      <input {...register('mobile', { required: 'Mobile number is required' })} placeholder="Mobile Number" />
      {errors.mobile && <span className="error">{errors.mobile.message}</span>}
      
      <select {...register('gender', { required: 'Gender is required' })} style={{ marginBottom: '14px' }}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      {errors.gender && <span className="error">{errors.gender.message}</span>}
      
      <label style={{ display: 'block', marginBottom: '5px', color: '#374151', fontSize: '14px', fontWeight: '500' }}>Date of Birth</label>
      <input type="date" {...register('dob', { required: 'Date of birth is required' })} style={{ marginBottom: '14px' }} />
      {errors.dob && <span className="error">{errors.dob.message}</span>}
      
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfoStep;
