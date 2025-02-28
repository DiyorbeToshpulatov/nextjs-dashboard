'use client';

import styles from '@/app/ui/modal.module.css';

/**
 * Modal Componenti
 *
 * @param {Object} props - Modal component oladigan props
 * @param {boolean} props.isOpen - Modalni ochib yopadigna
 * @param {Function} props.closeModal - Modalni yopadigan component
 * @param {React.ReactNode} props.children - Modal qabul qiladigan Children
 *
 * @returns {JSX.Element | null}
 */

const Modal = ({ isOpen, closeModal, children }: any) => {
  const handleClickOutside = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal} onClick={handleClickOutside}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
