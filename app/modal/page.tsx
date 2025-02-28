'use client';
import styles from '@/app/ui/home.module.css';

import { useState } from 'react';
import Modal from '../ui/modal';

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={styles.main}>
      <button onClick={openModal} className={styles.btn}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <h2 className={styles.top}>This is Reusable Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, magni
          inventore. Corporis accusamus autem consectetur, impedit sint maiores
          eaque recusandae, deleniti saepe consequuntur consequatur maxime quos
          id iste nisi totam.
        </p>
        <button onClick={closeModal} className={styles.btn}>
          Close Modal
        </button>
      </Modal>
    </div>
  );
}
