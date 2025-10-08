import { Header } from "../Header";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <Header />
        <div className="h-96 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Page content below header</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
