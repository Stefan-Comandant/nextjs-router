export const metadata = {
  title: "New Path",
  description: "The new layout page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>Digger what? This local layout</h1>
      <div>{children}</div>
    </>
  );
}
