import { Hero } from "../Hero";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function HeroExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <Hero />
      </div>
    </ThemeProvider>
  );
}
