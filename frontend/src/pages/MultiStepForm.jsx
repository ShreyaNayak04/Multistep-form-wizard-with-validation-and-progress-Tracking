import { AnimatePresence, motion } from "framer-motion";
import confetti from "canvas-confetti";

import React, { useState, useEffect } from "react";
import ProgressBar from "../components/ProgressBar";
import { useFormContext } from "../context/FormContext";
import PersonalInfoStep from "../components/steps/PersonalInfoStep";
import AddressInfoStep from "../components/steps/AddressInfoStep";
import AccountInfoStep from "../components/steps/AccountInfoStep";
import PreferencesStep from "../components/steps/PreferencesStep";
import BusinessStep from "../components/steps/BusinessStep";
import ReviewStep from "../components/steps/ReviewStep";
import { saveUser } from "../api/userApi";
import "../styles/form.css";


function MultiStepForm() {
  const { formData, currentStep, setCurrentStep, resetForm, profileImage } = useFormContext();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Ensure currentStep is always in range
  const stepsRef = React.useRef();
  // stepsRef is set after steps is defined
  const goToStep = (step) => {
    const maxStep = stepsRef.current ? stepsRef.current.length - 1 : 0;
    setCurrentStep(() => {
      if (step < 0) return 0;
      if (step > maxStep) return maxStep;
      return step;
    });
  };

  const isBusiness = formData.preferences.accountType === "Business";
  const steps = [
    {
      label: "Personal Info",
      component: (
        <PersonalInfoStep onNext={() => goToStep(currentStep + 1)} />
      ),
    },
    {
      label: "Address Info",
      component: (
        <AddressInfoStep
          onNext={() => goToStep(currentStep + 1)}
          onBack={() => goToStep(currentStep - 1)}
        />
      ),
    },
    {
      label: "Account Info",
      component: (
        <AccountInfoStep
          onNext={() => goToStep(currentStep + 1)}
          onBack={() => goToStep(currentStep - 1)}
        />
      ),
    },
    {
      label: "Preferences",
      component: (
        <PreferencesStep
          onNext={() => goToStep(currentStep + 1)}
          onBack={() => goToStep(currentStep - 1)}
        />
      ),
    },
    ...(isBusiness
      ? [
          {
            label: "Business Info",
            component: (
              <BusinessStep
                onNext={() => goToStep(currentStep + 1)}
                onBack={() => goToStep(currentStep - 1)}
              />
            ),
          },
        ]
      : []),
    {
      label: "Review & Submit",
      component: (
        <ReviewStep
          onBack={() => goToStep(currentStep - 1)}
          onSubmit={async () => {
            setLoading(true);
            try {
              // Flatten data for API
              const apiData = {
                ...formData.personalInfo,
                ...formData.addressInfo,
                ...formData.accountInfo,
                ...formData.preferences,
                ...(isBusiness ? formData.business : {}),
              };
              // Remove profileImage from apiData if it exists
              delete apiData.profileImage;
              
              await saveUser(apiData, profileImage);
              setSuccess(true);
              resetForm();
            } finally {
              setLoading(false);
            }
          }}
          loading={loading}
        />
      ),
    },
  ];

  // Set stepsRef for goToStep to use correct length
  stepsRef.current = steps;

  // Trigger confetti animation on success
  useEffect(() => {
    if (success) {
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ['#22c55e', '#16a34a', '#4ade80', '#86efac'];

      (function frame() {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors
        });
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    }
  }, [success]);

  if (success) {
    return (
      <div className="form-card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" fill="#e7fbe9"/><path d="M8 12.5l2.5 2.5l5-5"/></svg>
          <h2 style={{ color: '#16a34a', margin: 0, fontWeight: 700 }}>Registration Successful!</h2>
          <p style={{ color: '#22c55e', fontSize: 18, margin: 0, opacity: 1, fontWeight: 500 }}>
            Thank you for registering.
          </p>
        </div>
      </div>
    );
  }

  // Step labels and icons for progress bar
  const stepLabels = steps.map((s) => {
    if (s.label === 'Personal Info') return { icon: '👤', label: 'Personal' };
    if (s.label === 'Address Info') return { icon: '🏠', label: 'Address' };
    if (s.label === 'Account Info') return { icon: '🔒', label: 'Account' };
    if (s.label === 'Preferences') return { icon: '⚙️', label: 'Preferences' };
    if (s.label === 'Business Info') return { icon: '🏢', label: 'Business' };
    if (s.label === 'Review & Submit') return { icon: '✅', label: 'Review' };
    return { icon: '⬤', label: s.label };
  });

  return (
    <div className="form-card">
      <h2>Multi Step Registration</h2>
      <ProgressBar step={currentStep + 1} totalSteps={steps.length} stepLabels={stepLabels} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {steps[currentStep].component}
        </motion.div>
      </AnimatePresence>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 16 }}>
        <button
          type="button"
          style={{
            background: '#f3f3f3',
            color: '#222',
            border: '1px solid #bbb',
            borderRadius: 20,
            padding: '6px 18px',
            cursor: 'pointer',
            fontWeight: 500,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
          }}
          onClick={() => {
            if (window.confirm('Are you sure you want to clear the form and start over?')) {
              resetForm();
              setCurrentStep(0);
            }
          }}
        >
          ❌ Cancel/Reset
        </button>
      </div>
    </div>
  );
}

export default MultiStepForm;
