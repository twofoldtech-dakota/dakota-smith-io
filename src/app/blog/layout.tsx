
export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="container flex">
        <div className="container w-1/3">
            blog sidebar
        </div>

        <div className="container">
            {children}
        </div>
    </main>
    )
  }