import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Leaf, LogOut } from "lucide-react";
import type { User } from "@shared/schema";

export default function Home() {
  const { t } = useTranslation();
  const { user } = useAuth() as { user: User | undefined };

  const handleLogout = () => {
    window.location.href = "/api/logout";
  };

  const getInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();
    }
    if (user?.email) {
      return user.email[0].toUpperCase();
    }
    return "U";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-heading">BioBloom</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <Avatar data-testid="avatar-user">
                  <AvatarImage src={user?.profileImageUrl || undefined} alt={user?.firstName || "User"} />
                  <AvatarFallback>{getInitials()}</AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium" data-testid="text-user-name">
                    {user?.firstName || user?.lastName 
                      ? `${user?.firstName || ''} ${user?.lastName || ''}`.trim()
                      : user?.email || 'User'}
                  </p>
                  {user?.email && (user?.firstName || user?.lastName) && (
                    <p className="text-xs text-muted-foreground" data-testid="text-user-email">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                data-testid="button-logout"
              >
                <LogOut className="h-4 w-4 mr-2" />
                {t("auth.logout")}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3" data-testid="heading-welcome">
              {t("home.welcome")}, {user?.firstName || user?.email?.split('@')[0] || 'Farmer'}!
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("home.subtitle")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover-elevate" data-testid="card-dashboard">
              <CardHeader>
                <CardTitle className="text-lg">{t("home.dashboard.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("home.dashboard.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-crops">
              <CardHeader>
                <CardTitle className="text-lg">{t("home.crops.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("home.crops.description")}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-insights">
              <CardHeader>
                <CardTitle className="text-lg">{t("home.insights.title")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {t("home.insights.description")}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
