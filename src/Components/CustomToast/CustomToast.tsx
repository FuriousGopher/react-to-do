import { FC, useState, useEffect } from 'react';
import './CustomToast.css'
interface ToastProps {
  message: string;
  duration?: number;
}

const CustomToast: FC<ToastProps> = ({ message, duration = 3000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration); //TODO test why not working

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <>
      {visible && (
        <div className={`toast fade-in`}>
          <div className="toast-message">{message}</div>
        </div>
      )}
    </>
  );
};

export default CustomToast;
