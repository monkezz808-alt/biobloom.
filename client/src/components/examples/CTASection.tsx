import { CTASection } from "../CTASection";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function CTASectionExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <CTASection />
      </div>
    </ThemeProvider>
  );
}
