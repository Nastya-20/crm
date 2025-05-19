import React from 'react';
import PromotionForm from '@/app/components/promotion-form';
import Modal, { ModalProps } from '@/app/components/modal';

interface PromotionFormModalProps extends ModalProps {
  companyId?: string; // Make companyId optional
  show: boolean;
}

export default function PromotionFormModal({
  companyId,
  show,
  onClose, // onClose should be already in ModalProps
  ...rest
}: PromotionFormModalProps) {
  return (
    <Modal {...rest} onClose={onClose} show={show}>
      <PromotionForm companyId={companyId || ''} onSubmit={onClose} />
    </Modal>
  );
}


