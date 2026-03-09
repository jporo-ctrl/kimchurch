import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kingdom Insights Ministries | Serve & Volunteer",
  description:
    "At Kingdom Insights Ministries, we believe that serving is one of the highest expressions of love. Join us to serve, volunteer, and be part of what God is doing.",
  keywords: [
    "Kingdom Insights Ministries",
    "church",
    "serve",
    "volunteer",
    "ministry",
    "Hurst TX",
    "community",
  ],
  openGraph: {
    title: "Kingdom Insights Ministries | Become a New Member",
    description:
      "Serving is one of the highest expressions of love. Step in and step up with Kingdom Insights Ministries.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
     <body className="min-h-screen">
  {children}
  <script dangerouslySetInnerHTML={{__html: `
    document.addEventListener('submit', async function(e) {
      if(e.target.tagName === 'FORM') {
        e.preventDefault();
        var data = new FormData(e.target);
        fetch('https://formspree.io/f/mwvrpkzo', {method:'POST',body:data,headers:{'Accept':'application/json'}})
        .then(function(res) {
          if(res.ok) { alert('Thank you! We will be in touch soon!'); e.target.reset(); }
          else { alert('Something went wrong. Please email jporo@kim.church'); }
        });
      }
    });
  `}} />
</body>
    </html>
  );
}
