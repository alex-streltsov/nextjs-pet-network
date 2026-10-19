import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    color: '#000000',
    minWidth: '400px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

export default function ContentPage() {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', color: '#000' }}>
      <h1 style={{ color: '#fdf8f8' }}>Страница контента (Вариант 4)</h1>
      <button
        onClick={() => setIsOpen(true)}
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Открыть модальное окно
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <h2 style={{ color: '#000', marginTop: 0 }}>Информация</h2>
        <p style={{ color: '#000' }}>
          использованная библиотека для задания react-modal.
        </p>
        <button onClick={() => setIsOpen(false)}>Закрыть</button>
      </Modal>
    </div>
  );
}