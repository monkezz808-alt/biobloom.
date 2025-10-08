import { AIFeatures } from "../AIFeatures";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function AIFeaturesExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <AIFeatures />
      </div>
    </ThemeProvider>
  );
}
