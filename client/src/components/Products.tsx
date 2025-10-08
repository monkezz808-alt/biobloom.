import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Trash2, Bug, Heart, Link2, LayoutDashboard, ArrowRight } from "lucide-react";
import { ProductModal } from "./ProductModal";

export function Products() {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = [
    {
      icon: RefreshCw,
      title: t("products.rotation.title"),
      description: t("products.rotation.description"),
      features: t("products.rotation.features", { returnObjects: true }) as string[],
    },
    {
      icon: Trash2,
      title: t("products.waste.title"),
      description: t("products.waste.description"),
      features: t("products.waste.features", { returnObjects: true }) as string[],
    },
    {
      icon: Bug,
      title: t("products.pest.title"),
      description: t("products.pest.description"),
      features: t("products.pest.features", { returnObjects: true }) as string[],
    },
    {
      icon: Heart,
      title: t("products.vet.title"),
      description: t("products.vet.description"),
      features: t("products.vet.features", { returnObjects: true }) as string[],
    },
    {
      icon: Link2,
      title: t("products.blockchain.title"),
      description: t("products.blockchain.description"),
      features: t("products.blockchain.features", { returnObjects: true }) as string[],
    },
    {
      icon: LayoutDashboard,
      title: t("products.dashboard.title"),
      description: t("products.dashboard.description"),
      features: t("products.dashboard.features", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/50" id="products">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4" data-testid="badge-products">
            {t("products.badge")}
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6">
            {t("products.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("products.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-product-${index}`}>
              <CardHeader className="gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary mb-2">
                  <product.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-heading">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-2">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProduct(index)}
                  data-testid={`button-learn-more-${index}`}
                >
                  {t("products.rotation.cta")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" data-testid="button-explore-all">
            {t("products.exploreAll")}
          </Button>
        </div>

        {selectedProduct !== null && (
          <ProductModal
            open={selectedProduct !== null}
            onOpenChange={(open) => !open && setSelectedProduct(null)}
            icon={products[selectedProduct].icon}
            title={products[selectedProduct].title}
            description={products[selectedProduct].description}
            features={products[selectedProduct].features}
            ctaText={t("products.rotation.cta")}
          />
        )}
      </div>
    </section>
  );
}
