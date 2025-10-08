import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Satellite, TrendingUp } from "lucide-react";
import aiDashboard from "@assets/generated_images/AI_farming_dashboard_interface_cc1d59a3.png";

export function AIFeatures() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: t("aiSection.smartCrop.title"),
      description: t("aiSection.smartCrop.description"),
    },
    {
      icon: Satellite,
      title: t("aiSection.monitoring.title"),
      description: t("aiSection.monitoring.description"),
    },
    {
      icon: TrendingUp,
      title: t("aiSection.analytics.title"),
      description: t("aiSection.analytics.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32" id="features">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6">
            {t("aiSection.title")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t("aiSection.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img
              src={aiDashboard}
              alt="AI Dashboard"
              className="rounded-2xl shadow-lg w-full"
              data-testid="img-ai-dashboard"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-feature-${index}`}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary">
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
