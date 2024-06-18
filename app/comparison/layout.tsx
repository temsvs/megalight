import ComparisonLayout from '@/components/layouts/ComparisonLayout'

export const metadata = {
  title: 'Мега-Лайт | Сравнение товаров',
}

export default function ComparisonRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ComparisonLayout>{children}</ComparisonLayout>
}
