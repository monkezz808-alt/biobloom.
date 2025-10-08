import { useTranslation } from "react-i18next";
import { Leaf } from "lucide-react";

export function Footer() {
  const { t } = useTranslation();

  const footerSections = [
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.aboutUs"), href: "#" },
        { label: t("footer.careers"), href: "#" },
        { label: t("footer.contact"), href: "#" },
      ],
    },
    {
      title: t("footer.products"),
      links: [
        { label: t("footer.products"), href: "#products" },
      ],
    },
    {
      title: t("footer.resources"),
      links: [
        { label: t("footer.blog"), href: "#" },
        { label: t("footer.documentation"), href: "#" },
        { label: t("footer.support"), href: "#" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy"), href: "#" },
        { label: t("footer.terms"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-heading font-bold">BioBloom</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
              {t("footer.tagline")}
            </p>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} BioBloom. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
