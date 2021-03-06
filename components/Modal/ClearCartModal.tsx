import { FC } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { Size } from "../../types/WindowSize/WindowSize";
import ClearCartButton from "../Button/ClearCartButton";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/modal/ClearCartModal.module.scss";

interface ClearCartModalProps {
  clearCartModal: boolean;
  closeClearCartModal: () => void;
  onCartClear: () => void;
}

const CancelClearCartButton = styled(Button)<ButtonProps>(() => ({
  color: "#fff",
  backgroundColor: "hsl(213, 24%, 28%)",
  marginLeft: "1.5em",
  "&:hover": {
    backgroundColor: "hsl(213, 24%, 35%)",
  },
}));

const ClearCartModal: FC<ClearCartModalProps> = ({
  clearCartModal,
  closeClearCartModal,
  onCartClear,
}) => {
  const size: Size = useWindowSize();

  const backdropVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    initial: {
      top: "45%",
      opacity: 0,
    },
    animate: {
      top: "50%",
      opacity: 1,
    },
    exit: {
      top: "45%",
      opacity: 0,
    },
  };

  const transitions = {
    duration: 0.3,
    type: "spring",
    damping: 10,
    stiffness: 100,
  };

  return (
    <>
      <AnimatePresence initial={false}>
        {clearCartModal && (
          <>
            <motion.div
              key="clearcartmodalbackdrop"
              className={styles["clear-cart-modal-backdrop"]}
              style={{ width: `${size.width}px`, height: `${size.height}px` }}
              onClick={closeClearCartModal}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={backdropVariants}
            />

            <motion.div
              key="clearcartmodal"
              className={styles["clear-cart-modal-wrapper"]}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitions}
              variants={modalVariants}
            >
              <div className={styles["clear-cart-modal"]}>
                <p>Are you sure you want to clear all items in your Cart?</p>

                <div className={styles["clear-cart-modal-button-wrapper"]}>
                  <ClearCartButton onButtonClick={onCartClear}>
                    Yes
                  </ClearCartButton>
                  <CancelClearCartButton
                    variant="contained"
                    onClick={closeClearCartModal}
                  >
                    No
                  </CancelClearCartButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ClearCartModal;
