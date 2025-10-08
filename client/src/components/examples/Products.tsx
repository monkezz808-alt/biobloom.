import { Products } from "../Products";
import { ThemeProvider } from "../ThemeProvider";
import "../../lib/i18n";

export default function ProductsExample() {
  return (
    <ThemeProvider>
      <div className="bg-background">
        <Products />
      </div>
    </ThemeProvider>
  );
}
