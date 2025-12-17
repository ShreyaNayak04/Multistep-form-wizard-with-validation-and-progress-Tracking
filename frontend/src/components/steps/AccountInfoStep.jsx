import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import { useForm } from 'react-hook-form';

const AccountInfoStep = ({ onNext, onBack }) => {

  const { formData, updateForm } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData.accountInfo
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    updateForm('accountInfo', data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <span style={{ position: 'absolute', left: 10, top: 10, fontSize: 18, color: '#888' }}>👤</span>
        <input
          {...register('username', { required: 'Username is required' })}
          placeholder="Username"
          style={{ paddingLeft: 36 }}
        />
      </div>
      {errors.username && <span className="error">{errors.username.message}</span>}
      <div style={{ position: 'relative', marginBottom: 16 }}>
        <span style={{ position: 'absolute', left: 10, top: 10, fontSize: 18, color: '#888' }}>🔒</span>
        <input
          {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          style={{ paddingLeft: 36, paddingRight: 36 }}
        />
        <span
          style={{ position: 'absolute', right: 10, top: 10, width: 22, height: 22, display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
          onClick={() => setShowPassword((v) => !v)}
          title={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            // Eye Off SVG
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-5 0-9.27-3.11-11-7.5a11.05 11.05 0 0 1 5.17-5.92"/><path d="M1 1l22 22"/><path d="M9.53 9.53A3.5 3.5 0 0 0 12 15.5c1.38 0 2.63-.83 3.16-2.03"/><path d="M14.47 14.47A3.5 3.5 0 0 1 12 8.5c-.62 0-1.2.18-1.69.49"/></svg>
          ) : (
            // Eye SVG
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="10" ry="7"/><circle cx="12" cy="12" r="3"/></svg>
          )}
        </span>
      </div>
      {errors.password && <span className="error">{errors.password.message}</span>}
      <div className="nav-buttons">
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
      </div>
    </form>
  );
};

export default AccountInfoStep;
