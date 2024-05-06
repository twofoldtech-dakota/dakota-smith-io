
export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="container">
        <div className="">
            blog sidebar
        </div>
        <main className="container">
            {children}
        </main>
    </div>
    )
  }