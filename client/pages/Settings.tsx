import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings as SettingsIcon, Box, Zap, Globe } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Configure your Box Packer preferences and box sizes
        </p>
      </div>

      <Card className="border-dashed">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
            <SettingsIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle>Settings Configuration</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            Settings panel is being developed to give you full control over your
            box sizing algorithm, shipping preferences, and optimization rules.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-left">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Box className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Box Configurations</div>
                <div className="text-sm text-muted-foreground">
                  Define custom box sizes and costs
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Zap className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Optimization Rules</div>
                <div className="text-sm text-muted-foreground">
                  Set algorithm preferences
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Shopify Integration</div>
                <div className="text-sm text-muted-foreground">
                  Configure store connection
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            The settings will include box size management, algorithm tuning,
            shipping zone preferences, and Shopify webhook configurations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
