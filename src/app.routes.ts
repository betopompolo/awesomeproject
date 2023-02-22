import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type CommonRoutes = {
  Home: undefined;
  Profile: undefined;
  OrderList: undefined;
  Order: {
    orderId: string;
  };
};

export type TabRouteParams = {
  initialPage: keyof CommonRoutes;
};
export type TabRoutes = {
  HomeTab: TabRouteParams;
  SettingsTab: TabRouteParams;
};

export type CommonScreenProps<T extends keyof CommonRoutes> =
  NativeStackScreenProps<CommonRoutes, T>;
