import React from 'react';
import { Company, getCompany } from '@/lib/api';
import Header from '@/app/components/header';

export interface PageProps {
  company?: Company;
}

// Fetching data inside the component directly in the app directory
async function fetchCompany(id: string) {
  try {
    const company = await getCompany(id, { cache: 'no-store' });
    return company;
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  if (!params?.id) {
    return <div>Company not found.</div>; // If no ID is found
  }

  const company = await fetchCompany(params.id);

  if (!company) {
    return <div>Company not found.</div>; // If company is not found
  }

  return <Header>{company.title}</Header>;
}
