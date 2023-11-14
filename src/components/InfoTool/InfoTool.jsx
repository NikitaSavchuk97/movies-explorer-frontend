import './InfoTool.css';
import { useSelector, useDispatch } from 'react-redux';
import { clearError } from '../../redux/slices/errorSlice';
import { setDefaultStatus } from '../../redux/slices/userSlice';

function InfoTool() {
  const dispatch = useDispatch();
  const { errorValue, errorMessage } = useSelector((state) => state.errorSlice);

  if (errorValue) {
    setTimeout(() => popupClose(), 3000);
  }

  function popupClose() {
    dispatch(clearError());
    dispatch(setDefaultStatus());
  }

  return (
    <div className={`info-tool ${errorValue ? 'info-tool_type_active' : ''}`}>
      <div className='info-tool__container'>
        <h2 className='info-tool__title'>{errorMessage}</h2>
        <button className='info-tool__button' onClick={popupClose}>
          OK
        </button>
      </div>
    </div>
  );
}

export default InfoTool;
