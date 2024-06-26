import './feature.css';

const Feature = ({ title, text }) => (
  <div className="optimumai__features-container__feature">
    <div className="optimumai__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="optimumai__features-container_feature-text">
      {text.map((paragraph) => (
        <p>{paragraph}</p>
      ))}
    </div>
  </div>
);
export default Feature;