import { Timeline,TimelineConnector,TimelineItem,TimelineSeparator,TimelineContent,TimelineDot } from "@mui/lab";


const MuiTimeline = () => {
  return (
    <Timeline position="alternate">
        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City A
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                City B
            </TimelineContent>
        </TimelineItem>

        <TimelineItem>
            <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined"/>
                {/* <TimelineConnector/> */}
            </TimelineSeparator>
            <TimelineContent>
                City c
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default MuiTimeline