import { WhyChoose } from "../WhyChoose";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function WhyChooseExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <WhyChoose />
      </div>
    </ThemeProvider>
  );
}
