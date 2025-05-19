'use client'; 

import React, { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Toolbar from '@/app/components/toolbar';
import SearchInput from '@/app/components/search-input';
import AddPromotionButton from '@/app/components/add-promotion-button';

export interface PageProps {
  params: { id?: string }; // Додаємо `?`, щоб уникнути TypeScript-помилки
}

export default function Page({ params }: PageProps) {
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    if (!params?.id) {
      notFound(); // Якщо `id` відсутній, повертаємо 404
    } else {
      setCompanyId(params.id); // Зберігаємо значення в стейт
    }
  }, [params?.id]);

  if (!companyId) {
    return <div>Loading...</div>; // Покажемо лоадер до того, як `companyId` буде встановлено
  }

  return (
    <Toolbar action={<AddPromotionButton companyId={companyId} />}>
      <SearchInput />
    </Toolbar>
  );
}

