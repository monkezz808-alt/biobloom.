import { ThemeProvider } from "../ThemeProvider";
import { ThemeToggle } from "../ThemeToggle";

export default function ThemeProviderExample() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="p-8 bg-background text-foreground min-h-[200px]">
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <p>Click the button to toggle theme</p>
        </div>
      </div>
    </ThemeProvider>
  );
}
