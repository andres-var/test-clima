import React       from "react";
import { connect } from "react-redux";

import "./RepeaterZipCodes.scss";

function RepeaterZipCodes({
	climateCount,
	delegaions: {
		LIMIT,
		errors,
		loading,
		register,
		onSubmit,
		handleRefresh,
	},
}) {
	return (
		<div id="RepeaterZipCodes">
			{ LIMIT - climateCount > 0 && (
				<div className="content">
					<p>
						Ingresa tus
						{ LIMIT }
						{" "}
						zip codes (Todos los campos son obligatorios)
						{" "}
					</p>

					<form onSubmit={onSubmit} className="inputs">
						{
							Array(LIMIT - climateCount).fill(0).map((item, index) => (
								<div key={index}>
									<input
										className={errors?.zipCodes?.[index]?.message ? "errors-border" : ""}
										type="text"
										placeholder="Zip Code"
										{...register(`zipCodes[${index}]`)}
									/>
									{
										errors?.zipCodes?.[index] && (
											<span className="error">{errors?.zipCodes?.[index]?.message}</span>
										)
									}
								</div>
							))
						}

						<button className="button" type="submit" disabled={loading}>
							{" "}
							{ loading ? "Cargando..." : "Agregar" }
							{" "}
						</button>
					</form>
				</div>
			)}
			{ climateCount > 0 && (
				<div>
					<button className="button" type="button" onClick={handleRefresh}> Refresh data </button>
				</div>
			)}
		</div>
	);
}

const mapStateToProps = ({ climateReducer }) => ({
	climateCount : climateReducer?.climates?.length ?? 0,
});

export default connect(mapStateToProps)(RepeaterZipCodes);
