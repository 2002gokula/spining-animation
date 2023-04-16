function Spinner({ spinnerSize }) {
  const spinnerClass = `spinner ${spinnerSize}`;
  const circleClass = `circle ${spinnerSize}`;

  return (
    <div className="spinnerparent">
      <div className={`spinner-container ${spinnerSize}`}>
        <div className={spinnerClass}>
          <div className={circleClass}></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
