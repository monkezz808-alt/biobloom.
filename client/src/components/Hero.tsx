import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import heroImage from "@assets/generated_images/Farmer_using_AI_technology_6cc68428.png";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="secondary"
            className="mb-6 bg-background/80 backdrop-blur-sm text-foreground border-border/50"
            data-testid="badge-hero"
          >
            {t("hero.badge")}
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            {t("hero.title")}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              variant="default"
              className="text-base"
              onClick={() => {
                const element = document.querySelector("#products");
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              data-testid="button-start-journey"
            >
              {t("hero.cta")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
              onClick={() => console.log("Watch demo clicked")}
              data-testid="button-watch-demo"
            >
              <Play className="h-4 w-4 mr-2" />
              {t("hero.watchDemo")}
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-support">
              <div className="text-3xl font-bold text-white mb-1">
                {t("hero.stats.supportValue")}
              </div>
              <div className="text-sm text-white/80">
                {t("hero.stats.support")}
              </div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-yield">
              <div className="text-3xl font-bold text-white mb-1">
                {t("hero.stats.yieldValue")}
              </div>
              <div className="text-sm text-white/80">
                {t("hero.stats.yield")}
              </div>
            </div>
            <div className="bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" data-testid="stat-organic">
              <div className="text-3xl font-bold text-white mb-1">
                {t("hero.stats.organicValue")}
              </div>
              <div className="text-sm text-white/80">
                {t("hero.stats.organic")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
