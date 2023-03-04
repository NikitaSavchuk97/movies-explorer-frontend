import './InfoTool.css';

function InfoTool(props) {

	function handleClosePopup() {
		props.close()
	}

	return (
		<div className={`info-tool ${props.error ? 'info-tool_type_active' : ''}`}>
			<div className="info-tool__container">
				<h2 className="info-tool__title">
					{
						props.errorMessage
					}
				</h2>
				<button className='info-tool__button' onClick={handleClosePopup}>
					OK
				</button>
			</div>
		</div>
	)
}

export default InfoTool;
