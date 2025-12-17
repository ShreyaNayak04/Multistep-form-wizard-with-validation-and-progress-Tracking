const stepIcons = [
  { icon: '👤', label: 'Personal' },
  { icon: '🏠', label: 'Address' },
  { icon: '🔒', label: 'Account' },
  { icon: '⚙️', label: 'Preferences' },
  { icon: '🏢', label: 'Business' },
  { icon: '✅', label: 'Review' },
];

function ProgressBar({ step, totalSteps = 3, stepLabels }) {
  const percent = (step / totalSteps) * 100;
  // Use provided stepLabels or fallback to default
  const steps = stepLabels || stepIcons.slice(0, totalSteps);

  return (
    <div>
      <div className="step-indicator-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        {steps.map((s, idx) => (
          <div key={idx} style={{ textAlign: 'center', flex: 1, color: idx + 1 === step ? '#4f46e5' : '#374151', fontWeight: idx + 1 === step ? 600 : 500 }}>
            <div style={{ fontSize: 24 }}>{s.icon}</div>
            <div style={{ fontSize: 12, fontWeight: idx + 1 === step ? 600 : 500 }}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
