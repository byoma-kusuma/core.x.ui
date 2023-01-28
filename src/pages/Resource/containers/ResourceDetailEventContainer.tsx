import * as React from "react";
import CoolTable from "../../../components/CoolTable";
import GqlApiHandler from "../../../services/GqlApiHandler";
import { ResourceQuery, useResourceQuery } from "../../../generated/graphql";
import { useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";

export function formatResourceEventListData(data: ResourceQuery | undefined) {
  if (!data) return [];
  return data.resource.resourceEvents.map((r) => r.event);
}

export default function ResourceDetailsEventContainer() {
  const { id } = useParams();

  const [{ data, fetching, error }] = useResourceQuery({
    variables: { resourceId: Number(id) }
  });

  const [_showActions, setShowActions] = React.useState(false);
  const [_selectedMemberIds, setSelectedMemberIds] = React.useState<
    Array<number>
  >([]);

  return (
    <div>
      <CoolTable
        error={GqlApiHandler.getErrorMessage(error)}
        loading={fetching}
        tableHeight="calc(100vh - 400px)"
        defaultOrderKey="name"
        defaultOrderDirection="asc"
        onSelectActionButtonClick={(dataIds) => {
          setShowActions(true);
          setSelectedMemberIds(dataIds);
        }}
        data={formatResourceEventListData(data)}
        filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
        dataSchema={[
          {
            id: "name",
            headerLabel: "Name"
          },
          { id: "startDate", headerLabel: "Start Date" },
          {
            id: "endDate",
            headerLabel: "End Date"
          }
        ]}
      />
    </div>
  );
}
