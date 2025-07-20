import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Package, DollarSign } from "lucide-react";

export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted-foreground">
          Detailed insights into your packing optimization performance
        </p>
      </div>

      <Card className="border-dashed">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
            <BarChart3 className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle>Analytics Coming Soon</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-6">
            We're building comprehensive analytics to help you track savings,
            efficiency trends, and optimization patterns. This will include
            detailed charts and reports on your packing performance.
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-left">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Savings Trends</div>
                <div className="text-sm text-muted-foreground">
                  Track cost savings over time
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Package className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">Box Usage</div>
                <div className="text-sm text-muted-foreground">
                  Analyze box size patterns
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <div className="font-medium">ROI Reports</div>
                <div className="text-sm text-muted-foreground">
                  Measure return on investment
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Continue using the dashboard to start collecting data, or contact
            support to learn more about upcoming analytics features.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
