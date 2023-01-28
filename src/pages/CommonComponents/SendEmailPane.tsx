import { LoadingButton } from "@mui/lab";
import { Box, FormHelperText, TextField } from "@mui/material";
import * as React from "react";
import ReactSlidingPane from "react-sliding-pane";
import HtmlEditor from "../../components/HtmlEditor";
import Spinner from "../../components/Spinner";
import {
  MembersQuery,
  useMembersQuery,
  useSendEmailMutation
} from "../../generated/graphql";
import GqlApiHandler from "../../services/GqlApiHandler";
import MembersSelectAutocomplete from "./MembersSelectAutocomplete";

interface Props {
  open: boolean;
  handleClose: () => void;
  selectedMemberIds: Array<number>;
}

export default function SendEmailPane(props: Props) {
  const { open, handleClose, selectedMemberIds } = props;

  const [{ data, fetching }] = useMembersQuery();

  const [to, setTo] = React.useState<MembersQuery["members"]>([]);
  const [subject, setSubject] = React.useState("");
  const [content, setContent] = React.useState("");

  const [{ fetching: sending }, sendEmailMut] = useSendEmailMutation();

  const selectedMembersWithEmails = (
    selectedMemberIds
      .map((memberId) => data?.members.find((member) => member.id === memberId))
      .filter(Boolean) as MembersQuery["members"]
  ).filter((member) => member.email);

  React.useEffect(() => {
    setTo(selectedMembersWithEmails);
  }, [selectedMembersWithEmails.length]);

  if (fetching || !data) {
    return <Spinner />;
  }

  const membersWithEmail = data?.members.filter((member) => member.email) || [];
  const previouslySelectedMembersWithoutEmail = selectedMemberIds.filter(
    (memberId) => !membersWithEmail.some((member) => member.id === memberId)
  );

  return (
    <ReactSlidingPane
      overlayClassName="sliding-pane-bkbds-overlay"
      className="sliding-pane-bkbds-root"
      isOpen={open}
      title="Send Email"
      subtitle="Send Email to following members"
      width="800px"
      onRequestClose={handleClose}
    >
      <Box p={2}>
        <MembersSelectAutocomplete
          label="Select recipient"
          value={to.map((member) => member.id)}
          onChange={(_, members) => setTo(members)}
          options={membersWithEmail}
        />
        {previouslySelectedMembersWithoutEmail.length > 0 && (
          <FormHelperText sx={(theme) => ({ color: theme.palette.error.dark })}>
            Note: {previouslySelectedMembersWithoutEmail.length} members
            previously selected from the list do not have an email address.
          </FormHelperText>
        )}
        <TextField
          label="Subject"
          fullWidth
          variant="outlined"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          sx={{ mt: 1 }}
        />
        <Box mt={1} height="240px">
          <HtmlEditor onChange={(v) => setContent(v)} />
        </Box>
        <LoadingButton
          fullWidth
          loading={sending}
          sx={{ mt: 10 }}
          variant="contained"
          size="large"
          disabled={!to.length || !subject || !content}
          onClick={async () => {
            new GqlApiHandler(
              await sendEmailMut({
                sendEmailInput: {
                  memberEmails: to.map((member) => member.email as string),
                  subject,
                  content
                }
              })
            )
              .onSuccess(({ notiSuccess }) => {
                notiSuccess("Email sent!");
                handleClose();
              })
              .onError(({ notiErr }) => notiErr());
          }}
        >
          Send
        </LoadingButton>
      </Box>
    </ReactSlidingPane>
  );
}
