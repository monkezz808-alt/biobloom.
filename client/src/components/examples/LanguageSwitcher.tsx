import { LanguageSwitcher } from "../LanguageSwitcher";
import "../../../lib/i18n";

export default function LanguageSwitcherExample() {
  return (
    <div className="p-8 flex items-center gap-4">
      <LanguageSwitcher />
      <p>Select a language</p>
    </div>
  );
}
