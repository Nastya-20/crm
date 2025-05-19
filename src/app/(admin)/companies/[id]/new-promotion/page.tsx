'use client';

import React, { useEffect, useState } from 'react';
import PromotionForm from '@/app/components/promotion-form';

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const [companyId, setCompanyId] = useState<string | null>(null);

  useEffect(() => {
    params.then((resolvedParams) => {
      setCompanyId(resolvedParams.id);
    });
  }, [params]);

  if (!companyId) {
    return <div className="py-6 px-10 text-red-500">Company ID is missing</div>;
  }

  return (
    <div className="py-6 px-10">
      <PromotionForm companyId={companyId} />
    </div>
  );
}
