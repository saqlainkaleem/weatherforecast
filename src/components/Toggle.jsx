// Toggle.js
import "./Toggle.css";

const Toggle = ({ isCelsius, onToggle }) => {
	return (
		<div className="toggle">
			<label className="switch">
				<input
					type="checkbox"
					checked={isCelsius}
					onChange={onToggle}
					id="temperature-toggle"
				/>

				<span className="slider round"></span>
			</label>
			{isCelsius ? "°C" : "°F"}
		</div>
	);
};
export default Toggle;
