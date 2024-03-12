import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToastContainer = () => {
    // const {background, color} = props
    const customToastStyle = {
        width: '400px',
        height: '30px'
      };

  return (
    <ToastContainer
      position="top-center"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={true}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      limit={3}
      toastStyle={customToastStyle}
    />
  );
};

export default CustomToastContainer;
