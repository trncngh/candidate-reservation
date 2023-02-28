import { Button, Switch, Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import { useState } from "react";
import InvitationEmail from "../../components/InvitationEmail";
import { initialMeeting, Meeting } from "../../interfaces";
import { convertToLocalTime } from "../../utils";

interface MeetingListProps {
  meetingList: Meeting[];
  handleSendInvitation: (id: string) => void;
}

const MeetingList = ({
  meetingList,
  handleSendInvitation,
}: MeetingListProps) => {
  const columns = [
    "Name",
    "Email",
    "DateTime",
    "Confirmed",
    "Invite",
    "Actions",
  ];
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [meetingInfo, setMeetingInfo] = useState<Meeting>(initialMeeting);
  const handleDialog = (): void => {
    setOpenDialog(!openDialog);
  };
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.length > 0 &&
                columns.map((item: string, index: number) => {
                  return <TableCell key={`cell-${index}`}>{item}</TableCell>;
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {meetingList.length > 0 &&
              meetingList.map((item: Meeting, index: number) => {
                return (
                  <TableRow key={`row-${index}`}>
                    <TableCell>{item.candidate.name}</TableCell>
                    <TableCell>{item.candidate.email}</TableCell>
                    <TableCell>
                      {!!item.dateTime
                        ? convertToLocalTime(item.dateTime)
                        : "--:--"}
                    </TableCell>
                    <TableCell>{item.isConfirmed ? "Yes" : "No"}</TableCell>
                    <TableCell>
                      <Switch
                        disabled={item.isSent}
                        checked={item.isSent}
                        onChange={(e, checked) => {
                          handleSendInvitation(item.id);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => {
                          setMeetingInfo(item);
                          handleDialog();
                        }}
                      >
                        Email
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <InvitationEmail
        isOpen={openDialog}
        meetingInfo={meetingInfo}
        handleDialog={handleDialog}
      />
    </Container>
  );
};

export default MeetingList;
