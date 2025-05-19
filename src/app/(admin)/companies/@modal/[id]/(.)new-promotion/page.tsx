'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: { id?: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  const [isValidId, setIsValidId] = useState(true);

  useEffect(() => {
    if (!params?.id) {
      setIsValidId(false); // Якщо id відсутнє, помічаємо сторінку як недійсну
    }
  }, [params?.id]);

  if (!isValidId) {
    return <div>Invalid ID, page not found.</div>; // Показуємо повідомлення про помилку, якщо id відсутнє
  }

  const companyId = params.id; // Зберігаємо значення в змінну

  return (
    <PromotionFormModal
      companyId={companyId || ''}
      show={true}
      onClose={() => router.back()}
    />
  );
}

