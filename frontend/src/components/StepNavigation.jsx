function StepNavigation({ step, next, back, isLast }) {
  return (
    <div className="nav-buttons">
      {step > 1 && <button onClick={back}>Back</button>}
      {!isLast && <button onClick={next}>Next</button>}
      {isLast && <button type="submit">Submit</button>}
    </div>
  );
}

export default StepNavigation;
