import { Box } from "@mui/material";
import * as React from "react";
import TimelineChart from "./ClosedAreaGraph";
import PieChart from "./PieChart";
import {
  GetMemberActivitiesQueryResponse,
  useGetMemberActivities,
  useGetMemberCentres
} from "api/rest/reports";
import PageWithHeader from "components/PageWithHeader";
import { MembersQuery, useMembersQuery } from "generated/graphql";

export function withHydradedMembers(
  memberActivitiesData: GetMemberActivitiesQueryResponse | undefined,
  members: MembersQuery | undefined
) {
  if (!members || !memberActivitiesData) return null;

  const memberHashById = members.members.reduce((acc, cur) => {
    acc[cur.id] = cur;
    return acc;
  }, {} as Record<number, MembersQuery["members"][0]>);

  return memberActivitiesData.map((el) => ({
    ...el,
    memberDetails: el.members.map((m) => ({
      id: Number(m),
      name: memberHashById[m]
    }))
  }));
}

export default function Dashboard() {
  const { data: memberActivitiesData, isLoading: _ } = useGetMemberActivities();
  const { data: memberCentres } = useGetMemberCentres();
  const [{ data: members, fetching: __ }] = useMembersQuery();

  const activitiesDataHydrated = withHydradedMembers(
    memberActivitiesData,
    members
  );

  return (
    <PageWithHeader header="Dashboard">
      <Box display="flex">
        <Box>
          <Box fontSize="24px" mb="8px">
            Member Activities
          </Box>
          {activitiesDataHydrated && (
            <TimelineChart
              data={activitiesDataHydrated}
              height={500}
              width={800}
            />
          )}
        </Box>
        <Box marginLeft={"32px"}>
          <Box fontSize="24px" mb="8px">
            Member Centres
          </Box>
          {memberCentres && (
            <PieChart
              height={500}
              width={500}
              animate={false}
              data={memberCentres}
            />
          )}
        </Box>
      </Box>
    </PageWithHeader>
  );
}
