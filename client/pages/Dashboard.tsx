import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Package,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  DollarSign,
  Box,
  Truck,
  Settings as SettingsIcon,
} from "lucide-react";

// Mock data for demonstration
const recentOrders = [
  {
    id: "#1001",
    customer: "Sarah Johnson",
    items: 3,
    weight: "2.4 lbs",
    dimensions: "12x8x6 in",
    recommendedBox: "Medium Box",
    savings: "$2.40",
    status: "packed",
    timestamp: "2 minutes ago",
  },
  {
    id: "#1002",
    customer: "Mike Chen",
    items: 1,
    weight: "0.8 lbs",
    dimensions: "6x4x2 in",
    recommendedBox: "Small Box",
    savings: "$1.20",
    status: "analyzing",
    timestamp: "5 minutes ago",
  },
  {
    id: "#1003",
    customer: "Emily Davis",
    items: 7,
    weight: "5.2 lbs",
    dimensions: "16x12x10 in",
    recommendedBox: "Large Box",
    savings: "$4.80",
    status: "packed",
    timestamp: "12 minutes ago",
  },
  {
    id: "#1004",
    customer: "Alex Thompson",
    items: 2,
    weight: "1.6 lbs",
    dimensions: "10x6x4 in",
    recommendedBox: "Small Box",
    savings: "$1.80",
    status: "needs-review",
    timestamp: "18 minutes ago",
  },
];

const stats = [
  {
    title: "Orders Optimized Today",
    value: "247",
    change: "+12%",
    icon: Package,
    trend: "up",
  },
  {
    title: "Shipping Costs Saved",
    value: "$1,247",
    change: "+8%",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Avg. Processing Time",
    value: "1.2s",
    change: "-15%",
    icon: Clock,
    trend: "down",
  },
  {
    title: "Success Rate",
    value: "98.5%",
    change: "+2%",
    icon: CheckCircle,
    trend: "up",
  },
];

function getStatusIcon(status: string) {
  switch (status) {
    case "packed":
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    case "analyzing":
      return <Clock className="h-4 w-4 text-yellow-500" />;
    case "needs-review":
      return <AlertTriangle className="h-4 w-4 text-orange-500" />;
    default:
      return <Package className="h-4 w-4 text-gray-500" />;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "packed":
      return "bg-green-100 text-green-800 border-green-200";
    case "analyzing":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "needs-review":
      return "bg-orange-100 text-orange-800 border-orange-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Monitor your order packing optimization in real-time
          </p>
        </div>
        <Button className="gap-2">
          <Box className="h-4 w-4" />
          Optimize All Orders
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p
                className={`text-xs flex items-center gap-1 ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                <TrendingUp className="h-3 w-3" />
                {stat.change} from yesterday
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Recent Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    <div>
                      <div className="font-semibold">{order.id}</div>
                      <div className="text-sm text-muted-foreground">
                        {order.customer}
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:block">
                    <div className="text-sm font-medium">
                      {order.items} item{order.items > 1 ? "s" : ""}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {order.weight} • {order.dimensions}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right hidden md:block">
                    <div className="text-sm font-medium">
                      {order.recommendedBox}
                    </div>
                    <div className="text-sm text-green-600">
                      Saved {order.savings}
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className={getStatusColor(order.status)}
                  >
                    {order.status.replace("-", " ")}
                  </Badge>

                  <div className="text-sm text-muted-foreground min-w-0">
                    {order.timestamp}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button variant="outline">View All Orders</Button>
          </div>
        </CardContent>
      </Card>

      {/* Box Recommendations */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Box className="h-5 w-5" />
              Most Used Boxes Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Small Box (6x4x2")</div>
                  <div className="text-sm text-muted-foreground">
                    152 orders
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">$182.40</div>
                  <div className="text-sm text-muted-foreground">saved</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Medium Box (12x8x6")</div>
                  <div className="text-sm text-muted-foreground">89 orders</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">$213.60</div>
                  <div className="text-sm text-muted-foreground">saved</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Large Box (16x12x10")</div>
                  <div className="text-sm text-muted-foreground">32 orders</div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-green-600">$153.60</div>
                  <div className="text-sm text-muted-foreground">saved</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start gap-2" variant="outline">
              <SettingsIcon className="h-4 w-4" />
              Configure Box Sizes
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <TrendingUp className="h-4 w-4" />
              View Analytics Report
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <Package className="h-4 w-4" />
              Bulk Optimize Orders
            </Button>
            <Button className="w-full justify-start gap-2" variant="outline">
              <AlertTriangle className="h-4 w-4" />
              Review Flagged Orders
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
