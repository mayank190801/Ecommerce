import React from "react"
// import PropTypes from "prop-types"

const Rating = ({ values, text, color }) => {
	return (
		<div>
			<span>
				<i
					style={{ color }}
					className={
						values >= 1
							? "fas fa-star"
							: values >= 0.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						values >= 2
							? "fas fa-star"
							: values >= 1.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						values >= 3
							? "fas fa-star"
							: values >= 2.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						values >= 4
							? "fas fa-star"
							: values >= 3.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				/>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						values >= 5
							? "fas fa-star"
							: values >= 4.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}
				/>
			</span>
			<span> {text ? text : ""}</span>
		</div>
	)
}

Rating.defaultProps = {
	color: "#f8e825",
}

// Rating.PropTypes = {
// 	values: PropTypes.number.isRequired,
// 	text: PropTypes.string.isRequired,
// 	color: PropTypes.string,
// }

export default Rating
