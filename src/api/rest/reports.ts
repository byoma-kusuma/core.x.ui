import { useQuery } from "@tanstack/react-query";
import { Server } from "./setup";

export type GetMemberActivitiesQueryResponse = Array<{
  day: string;
  members: Array<number>;
}>;

export type GetMemberByCentresQueryResponse = Array<{
  centreId: number;
  centreName: string;
  memberCount: number;
}>;

export const getMemberActivities = () =>
  Server.get<GetMemberActivitiesQueryResponse>("/reports/memberActivities");

export const getMemberCentres = () =>
  Server.get<GetMemberByCentresQueryResponse>("/reports/memberCentres");

export function useGetMemberActivities() {
  return useQuery({
    queryKey: ["memberActivities"],
    queryFn: async () => {
      const response = await getMemberActivities();
      return response.data;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchIntervalInBackground: true,
    refetchInterval: 120000
  });
}

export function useGetMemberCentres() {
  return useQuery({
    queryKey: ["memberCentres"],
    queryFn: async () => {
      const response = await getMemberCentres();
      return response.data;
    },
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    refetchIntervalInBackground: true,
    refetchInterval: 120000
  });
}
