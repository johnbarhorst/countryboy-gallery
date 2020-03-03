import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ModalContainer, ModalCard, CloseButton } from '../Elements';

const Modal = ({ isToggled, setToggle, children }) => {
  return (
    <AnimatePresence>
      {isToggled &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContainer>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 30 }}
              style={{
                position: 'relative',
                height: '80%',
                width: '60%',
                background: '#fff',
                borderRadius: '15px',
                boxShadow: '1px 1px 15px rgba(0,0,0,0.4)'
              }}
            >

              <CloseButton onClick={() => setToggle(false)} >X</CloseButton>
              {children}
            </motion.div>
          </ModalContainer>
        </motion.div>
      }
    </AnimatePresence>
  )
}

export default Modal;