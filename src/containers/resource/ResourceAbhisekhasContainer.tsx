import * as React from "react";
import CoolTable from "components/CoolTable";
import GqlApiHandler from "services/GqlApiHandler";
import { ResourceQuery, useResourceQuery } from "generated/graphql";
import { useParams } from "react-router-dom";
import "react-sliding-pane/dist/react-sliding-pane.css";

export function formatResourceAbhisekhaListData(
  data: ResourceQuery | undefined
) {
  if (!data) return [];
  return data.resource.resourceAbhisekhas.map((r) => r.abhisekha);
}

export default function ResourceDetailsAbhisekhaContainer() {
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
        data={formatResourceAbhisekhaListData(data)}
        filterSchema={[{ id: 1, label: "All", filterFn: (data) => data }]}
        dataSchema={[
          {
            id: "name",
            headerLabel: "Name"
          },
          { id: "teacher", headerLabel: "Teacher" },
          {
            id: "description",
            headerLabel: "Description"
          }
        ]}
      />
    </div>
  );
}
