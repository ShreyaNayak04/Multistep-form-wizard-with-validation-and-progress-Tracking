import React from 'react';
import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';

const AddressInfoStep = ({ onNext, onBack }) => {
  const { formData, updateForm } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData.addressInfo
  });

  const onSubmit = (data) => {
    updateForm('addressInfo', data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('address', { required: 'Address is required' })} placeholder="Address" />
      {errors.address && <span className="error">{errors.address.message}</span>}
      <input {...register('city', { required: 'City is required' })} placeholder="City" />
      {errors.city && <span className="error">{errors.city.message}</span>}
      <input {...register('state', { required: 'State is required' })} placeholder="State" />
      {errors.state && <span className="error">{errors.state.message}</span>}
      <div className="nav-buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default AddressInfoStep;
