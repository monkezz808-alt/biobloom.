import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Leaf, Users } from "lucide-react";

export function WhyChoose() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Globe,
      title: t("whyChoose.language.title"),
      description: t("whyChoose.language.description"),
    },
    {
      icon: Leaf,
      title: t("whyChoose.organic.title"),
      description: t("whyChoose.organic.description"),
    },
    {
      icon: Users,
      title: t("whyChoose.farmer.title"),
      description: t("whyChoose.farmer.description"),
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32" id="about">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6">
            {t("whyChoose.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("whyChoose.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover-elevate text-center" data-testid={`card-reason-${index}`}>
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <reason.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
