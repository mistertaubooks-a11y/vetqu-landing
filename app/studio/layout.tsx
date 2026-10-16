export const metadata = {
  title: 'VetQu CMS Studio',
  description: 'Content Management System VetQu',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ margin: 0, height: '100vh', maxHeight: '100dvh', overflow: 'hidden' }}>
      {children}
    </div>
  );
}
