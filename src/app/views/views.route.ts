import type { Route } from "@angular/router";

export const VIEWS_ROUTES: Route[] = [
  {
    path: 'icons',
    loadChildren: () =>
      import('./icons/icons.route').then((mod) => mod.ICONS_ROUTES),
  },
  {
    path: '',
    loadChildren: () =>
      import('./notifications/notifications.route').then((mod) => mod.NOTIFICATIONS_ROUTES),
  },

]