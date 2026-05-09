"use client";

import { ReactNode, useEffect } from "react";

import styles from "./modal.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  maxWidth = "1000px",
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";

      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.active : ""}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modal} ${isOpen ? styles.active : ""}`}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {children}
      </div>
    </div>
  );
}
