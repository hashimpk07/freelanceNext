/* eslint-disable */

import {
  Banknote,
  ChartBar,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
  permission?: string;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
  permission?: string;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "sidebar.home.label",
    items: [
      {
        title: "sidebar.home.home",
        url: "/dashboard/home",
        icon: LayoutDashboard,
        permission: "view-dashboard",
      },
    ],
  },
  {
    id: 2,
    label: "sidebar.dashboards.label",
    items: [
      {
        title: "sidebar.dashboards.dashboard",
        url: "/dashboard/default",
        icon: LayoutDashboard,
        permission: "view-dashboard",
      },
      {
        title: "sidebar.dashboards.overall",
        url: "/dashboard/overall",
        icon: ChartBar,
        permission: "view-dashboard-overall",
      },
      {
        title: "sidebar.dashboards.clients",
        url: "/dashboard/clients",
        icon: Banknote,
        permission: "view-dashboard-client",
      },
      {
        title: "sidebar.dashboards.management",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-dashboard-management",
      },
      {
        title: "sidebar.dashboards.operational_performance",
        url: "/dashboard/operational-performance",
        icon: Banknote,
        permission: "view-dashboard-operational-performance",
      },
      {
        title: "sidebar.dashboards.sales",
        url: "/dashboard/sales",
        icon: Banknote,
        permission: "view-dashboard-sales",
      },
    ],
  },
  {
    id: 3,
    label: "sidebar.orders.label",
    items: [
      {
        title: "sidebar.orders.dispatcher",
        url: "/dashboard/orders",
        icon: LayoutDashboard,
        permission: "view-dispatcher",
      },
      {
        title: "sidebar.orders.dispatcher_live",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-live-dispatcher",
      },
      {
        title: "sidebar.orders.scheduled_orders",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-scheduled-orders",
      },
      {
        title: "sidebar.orders.live_stream_map",
        url: "/dashboard/management",
        icon: Banknote,
        permission: "map-dispatcher",
      },
      {
        title: "sidebar.orders.live_stream_map_beta",
        url: "/dashboard/operational-performance",
        icon: Banknote,
        permission: "map-dispatcher-beta",
      },
      {
        title: "sidebar.orders.consolidated_orders",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-consolidated-orders",
      },
    ],
  },
  {
    id: 4,
    label: "sidebar.complaints.label",
    items: [
      {
        title: "sidebar.complaints.tickets",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-tickets",
      },
      {
        title: "sidebar.complaints.pending_orders",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-pending-orders",
      },
      {
        title: "sidebar.complaints.ticket_report",
        url: "/unauthorized",
        icon: Banknote,
        permission: "report-tickets",
      },
    ],
  },
  {
    id: 5,
    label: "sidebar.captain_reports.label",
    items: [
      {
        title: "sidebar.captain_reports.delivery_report",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-delivery-report",
      },
      {
        title: "sidebar.captain_reports.commission_report",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-commissions",
      },
      {
        title: "sidebar.captain_reports.commission_payments",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-commissions",
      },
      {
        title: "sidebar.captain_reports.kpi_report",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-captain-performance",
      },
      {
        title: "sidebar.captain_reports.consolidated_commission_report",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-commissions",
      },
      {
        title: "sidebar.captain_reports.active_low_performance_report",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-captain-performance",
      },
      {
        title: "sidebar.captain_reports.shift_report",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-shift-report",
      },
    ],
  },
  {
    id: 6,
    label: "sidebar.client_reports.label",
    items: [
      {
        title: "sidebar.client_reports.sales_report",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-salesreport",
      },
      {
        title: "sidebar.client_reports.cancellation_report",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-cancellation-report",
      },
      {
        title: "sidebar.client_reports.client_sales_report",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-client-salesreport",
      },
      {
        title: "sidebar.client_reports.client_order",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-client-order",
      },
      {
        title: "sidebar.client_reports.client_transactions",
        url: "/unauthorized",
        icon: Banknote,
        permission: "view-client-transaction",
      },
    ],
  },
  {
    id: 7,
    label: "sidebar.3pl_reports.label",
    items: [
      {
        title: "sidebar.3pl_reports.com_report",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-3pl-reports",
      },
      {
        title: "sidebar.3pl_reports.captain_com_report",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-3pl-reports",
      },
    ],
  },
  {
    id: 8,
    label: "sidebar.kpi_reports.label",
    items: [
      {
        title: "sidebar.kpi_reports.captain_performance",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-captain-performance",
      },
      {
        title: "sidebar.kpi_reports.captain_working_days",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.captain.working-days",
      },
      {
        title: "sidebar.kpi_reports.order_timeline",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-order-time-line",
      },
      {
        title: "sidebar.kpi_reports.high_level",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.high_level",
      },
      {
        title: "sidebar.kpi_reports.driver_level",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-report.driver_level",
      },
      {
        title: "sidebar.kpi_reports.vendor_level",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.vendor_level",
      },
      {
        title: "sidebar.kpi_reports.geographical_level",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-report.geographical_level",
      },
      {
        title: "sidebar.kpi_reports.region_based",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.region_based_report",
      },
      {
        title: "sidebar.kpi_reports.area_based",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.area_based_report",
      },
      {
        title: "sidebar.kpi_reports.zone_based",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.zone_based_report",
      },
      {
        title: "sidebar.kpi_reports.zone_detailed",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-report.zone_detailed_report",
      },
    ],
  },
  {
    id: 9,
    label: "sidebar.reports.label",
    items: [
      {
        title: "sidebar.reports.expense_report",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-expensereport",
      },
      {
        title: "sidebar.reports.captain_transactions",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-captain-transaction",
      },
    ],
  },
  {
    id: 10,
    label: "sidebar.vehicle.label",
    items: [
      {
        title: "sidebar.vehicle.all_vehicle",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-vehicles",
      },
      {
        title: "sidebar.vehicle.rented_vehicles",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "manage-rent",
      },
    ],
  },
  {
    id: 11,
    label: "sidebar.employees.label",
    items: [
      {
        title: "sidebar.employees.captains",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-captains",
      },
      {
        title: "sidebar.employees.employees",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-admin",
      },
      {
        title: "sidebar.employees.reg_requests",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-captain-requests",
      },
      {
        title: "sidebar.employees.operations",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "view-operations",
      },
    ],
  },
  {
    id: 12,
    label: "sidebar.operation_reports.label",
    items: [
      {
        title: "sidebar.operation_reports.daily_shift_reports",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "operations-daily-report",
      },
      {
        title: "sidebar.operation_reports.timesheet_reports",
        url: "/unauthorized",
        icon: ChartBar,
        permission: "operations-timesheet-report",
      },
    ],
  },
  {
    id: 13,
    label: "sidebar.crm.label",
    items: [
      {
        title: "sidebar.crm.notifications",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-sendable",
      },
    ],
  },
  {
    id: 14,
    label: "sidebar.sales_management.label",
    items: [
      {
        title: "sidebar.sales_management.roles",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-roles",
      },
      {
        title: "sidebar.sales_management.team_management",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-teams",
      },
      {
        title: "sidebar.sales_management.sales_leads",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-leads",
      },
      {
        title: "sidebar.sales_management.clients",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-clients",
      },
    ],
  },
  {
    id: 15,
    label: "sidebar.map_views.label",
    items: [
      {
        title: "sidebar.map_views.store_view",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "map-view-shops",
      },
      {
        title: "sidebar.map_views.order_view",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "map-view-order",
      },
      {
        title: "sidebar.map_views.store_order_view",
        url: "/unauthorized",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    id: 16,
    label: "sidebar.delivery_rules.label",
    items: [
      {
        title: "sidebar.delivery_rules.price_rule_master",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-delivery-charge-rule",
      },
      {
        title: "sidebar.delivery_rules.cancellation_charge",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-delivery-charge-rule",
      },
      {
        title: "sidebar.delivery_rules.return_to_client_charge",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-delivery-charge-rule",
      },
    ],
  },
  {
    id: 17,
    label: "sidebar.system_settings.label",
    items: [
      {
        title: "sidebar.system_settings.shift_rules",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-shift-rules",
      },
      {
        title: "sidebar.system_settings.dispatch_rules",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-dispatch-rule",
      },
      {
        title: "sidebar.system_settings.commission_rules",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-commission-rule",
      },
      {
        title: "sidebar.system_settings.role_and_permission",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-role-permissions",
      },
      {
        title: "sidebar.system_settings.vat_master",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-vat",
      },
      {
        title: "sidebar.system_settings.industry_types",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-industries",
      },
      {
        title: "sidebar.system_settings.api_token",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-api-tokens",
      },
    ],
  },
  {
    id: 18,
    label: "sidebar.geo_settings.label",
    items: [
      {
        title: "sidebar.geo_settings.regions",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-regions",
      },
      {
        title: "sidebar.geo_settings.areas",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-quadrants",
      },
      {
        title: "sidebar.geo_settings.tires",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-tire",
      },
      {
        title: "sidebar.geo_settings.zones",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-zones",
      },
      {
        title: "sidebar.geo_settings.vat_master",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-vat",
      },
      {
        title: "sidebar.geo_settings.industry_types",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-industries",
      },
      {
        title: "sidebar.geo_settings.api_token",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-api-tokens",
      },
    ],
  },
  {
    id: 19,
    label: "sidebar.logs_and_expires.label",
    items: [
      {
        title: "sidebar.logs_and_expires.logs",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-logs",
      },
      {
        title: "sidebar.logs_and_expires.expires",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-expires",
      },
    ],
  },
  {
    id: 20,
    label: "sidebar.general.label",
    items: [
      {
        title: "sidebar.general.company_info",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-company",
      },
      {
        title: "sidebar.general.accounts",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "manage-accounts",
      },
      {
        title: "sidebar.general.partner",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-partner",
      },
      {
        title: "sidebar.general.asset",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "view-assets",
      },
    ],
  },
  {
    id: 21,
    label: "sidebar.sales_and_operations.label",
    items: [
      {
        title: "sidebar.sales_and_operations.active_clients_map",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "marketing-active-clients",
      },
      {
        title: "sidebar.sales_and_operations.potential_client",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "marketing-potential-clients",
      },
      {
        title: "sidebar.sales_and_operations.client_scrapper",
        url: "/unauthorized",
        icon: LayoutDashboard,
        permission: "marketing-scrapper",
      },
    ],
  },
  // {
  //   id: 3,
  //   label: "Misc",
  //   items: [
  //     {
  //       title: "Others",
  //       url: "/dashboard/coming-soon",
  //       icon: SquareArrowUpRight,
  //       comingSoon: true,
  //     },
  //   ],
  // },
];

export const ClientSidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "sidebar.client_home.label",
    items: [
      {
        title: "sidebar.home.home",
        url: "/dashboard/home",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
      {
        title: "sidebar.client_home.dashboard",
        url: "/dashboard/home/client",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
      {
        title: "sidebar.client_home.orders",
        url: "/dashboard/orders",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
      {
        title: "sidebar.client_home.sales_report",
        url: "/dashboard/home/client",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
      {
        title: "sidebar.client_home.transactions",
        url: "/dashboard/client/transactions",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
      {
        title: "sidebar.client_home.config_access",
        url: "/dashboard/home/client",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
      {
        title: "sidebar.client_home.order_report",
        url: "/dashboard/client/order-report",
        icon: LayoutDashboard,
        // permission: "view-dashboard",
      },
    ],
  },
];

export const ThirdPartySidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "sidebar.home.label",
    items: [
      {
        title: "sidebar.third_party_home.third_party_home",
        url: "/dashboard/home/3pl",
        icon: LayoutDashboard,
        permission: "view-dashboard",
      },
    ],
  },
];
