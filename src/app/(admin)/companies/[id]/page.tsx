import React from 'react';
import { notFound } from 'next/navigation';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { Company, getCompany, getPromotions } from '@/lib/api';
import getQueryClient from '@/lib/utils/getQueryClient';
import CompanyInfo from '@/app/components/company-info';
import CompanyPromotions from '@/app/components/company-promotions';

export interface PageProps {
  params: { id?: string }; // Додаємо `?`, щоб уникнути TypeScript-помилки
}

export default async function Page({ params }: PageProps) {
  if (!params?.id) {
    notFound(); // Якщо `id` відсутній, повертаємо 404
  }

  const companyId = params.id; // Зберігаємо значення в змінну
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', companyId]) as Company;
  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className="py-6 px-10 grid grid-cols-12 gap-5">
        <div className="col-span-3">
          <CompanyInfo companyId={companyId} />
        </div>
        <div className="col-span-9">
          <CompanyPromotions companyId={companyId} />
        </div>
      </div>
    </HydrationBoundary>
  );
}

