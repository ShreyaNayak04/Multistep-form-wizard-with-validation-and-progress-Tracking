import React, { createContext, useContext, useState, useEffect } from 'react';

const initialFormData = {
  personalInfo: {
    fullName: '',
    email: '',
    mobile: '',
  },
  addressInfo: {
    address: '',
    city: '',
    state: '',
  },
  accountInfo: {
    username: '',
    password: '',
  },
  preferences: {
    accountType: '', // e.g., 'Personal' or 'Business'
    newsletter: false,
  },
  business: {
    companyName: '',
    companySize: '',
  },
};

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('onboardingForm');
    return saved ? JSON.parse(saved) : initialFormData;
  });
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    localStorage.setItem('onboardingForm', JSON.stringify(formData));
  }, [formData]);

  const updateForm = (section, values) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        ...values,
      },
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
    setCurrentStep(0);
    localStorage.removeItem('onboardingForm');
  };

  return (
    <FormContext.Provider value={{ formData, updateForm, currentStep, setCurrentStep, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};
