import React from 'react';
import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';

const PersonalInfoStep = ({ onNext }) => {
  const { formData, updateForm } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData.personalInfo
  });

  const onSubmit = (data) => {
    updateForm('personalInfo', data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('fullName', { required: 'Full name is required' })} placeholder="Full Name" />
      {errors.fullName && <span className="error">{errors.fullName.message}</span>}
      <input {...register('email', { required: 'Email is required', pattern: { value: /.+@.+\..+/, message: 'Invalid email' } })} placeholder="Email Address" />
      {errors.email && <span className="error">{errors.email.message}</span>}
      <input {...register('mobile', { required: 'Mobile number is required' })} placeholder="Mobile Number" />
      {errors.mobile && <span className="error">{errors.mobile.message}</span>}
      <button type="submit">Next</button>
    </form>
  );
};

export default PersonalInfoStep;
