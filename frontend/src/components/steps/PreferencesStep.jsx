import React from 'react';
import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';

const PreferencesStep = ({ onNext, onBack }) => {
  const { formData, updateForm } = useFormContext();
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: formData.preferences
  });
  const accountType = watch('accountType');

  const onSubmit = (data) => {
    updateForm('preferences', data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input type="radio" value="Personal" {...register('accountType', { required: 'Account type required' })} /> Personal
      </label>
      <label>
        <input type="radio" value="Business" {...register('accountType', { required: 'Account type required' })} /> Business
      </label>
      {errors.accountType && <span className="error">{errors.accountType.message}</span>}
      <label>
        <input type="checkbox" {...register('newsletter')} /> Subscribe to newsletter
      </label>
      <div className="nav-buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default PreferencesStep;
