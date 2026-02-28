import HeroSection from "./componets/HeroSection";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const params = await searchParams;
  return <HeroSection submitted={params.submitted} />;
}

