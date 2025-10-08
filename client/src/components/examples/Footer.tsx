import { Footer } from "../Footer";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function FooterExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <Footer />
      </div>
    </ThemeProvider>
  );
}
