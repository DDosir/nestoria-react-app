import React from "react";

const Location = ({name, type, dimension, residents, url, created}) => {
	return (
		<div className={"Character"}>
			{/*</div>*/}
			<div className={"Description"}>
				<p className={"TextLine"}>{`Name : ${name}`}</p>
				{type ?
					<p className={"TextLine"}>{`Type : ${type}`}</p>
					: null}
				<p className={"TextLine"}>{`Dimension : ${dimension}`}</p>
				{/*<p className={"TextLine"}>{`Residents : ${residents}`}</p>*/}
			</div>
		</div>
	);
}

export default Location
