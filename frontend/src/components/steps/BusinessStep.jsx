import React from 'react';
import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';

const BusinessStep = ({ onNext, onBack }) => {
  const { formData, updateForm } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData.business
  });

  const onSubmit = (data) => {
    updateForm('business', data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('companyName', { required: 'Company name is required' })} placeholder="Company Name" />
      {errors.companyName && <span className="error">{errors.companyName.message}</span>}
      <input {...register('companySize', { required: 'Company size is required' })} placeholder="Company Size" />
      {errors.companySize && <span className="error">{errors.companySize.message}</span>}
      <div className="nav-buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default BusinessStep;
