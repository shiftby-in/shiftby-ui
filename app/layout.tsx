
// Removed unnecessary React import
import "../theme/theme";
import ThemeRegistry from "../theme/ThemeRegistry";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Shiftby — Support your work and career in a changing world",
  description:
    "Shiftby helps professionals feel more confident and capable with practical AI-supported learning.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main style={{ padding: "16px", paddingTop: "72px" }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Header />
          <main style={{ padding: "16px", paddingTop: "72px" }}>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
