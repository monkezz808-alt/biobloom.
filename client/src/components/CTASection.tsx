import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { ContactModal } from "./ContactModal";

export function CTASection() {
  const { t } = useTranslation();
  const features = t("cta.features", { returnObjects: true }) as string[];
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-primary/5" id="pricing">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              data-testid="button-get-started"
            >
              {t("cta.getStarted")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => setContactModalOpen(true)}
              data-testid="button-contact-sales"
            >
              {t("cta.contactSales")}
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2" data-testid={`feature-${index}`}>
                <Check className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <ContactModal
          open={contactModalOpen}
          onOpenChange={setContactModalOpen}
        />
      </div>
    </section>
  );
}
