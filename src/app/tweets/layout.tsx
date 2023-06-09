import styles from "./layout.module.css";

export const metadata = {
  title: "comments",
  description: "Page Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <li>Home</li>
        <li>dashboard</li>
        <li>about</li>
      </nav>
      {children}
    </>
  );
}
