import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";
import "./calendar.scss";
const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const darkModeColors = {
    primary: "#1f1f1f", // Dark background color
    greenAccent: {
      500: "#76ff03", // Brighter green for accents
    },
    grey: "#ffffff", // White or light text color
  };

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box
      m={{ xs: "10px", sm: "20px" }} // Responsive margins
      color={darkModeColors.grey}
      bgcolor={darkModeColors.primary}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }} // Stack vertically on small screens
      gap="20px"
    >
      {/* CALENDAR SIDEBAR */}
      <Box
        flex="1 1 100%" // Full width on small screens
        md="1 1 25%" // 25% width on medium and larger screens
        bgcolor={darkModeColors.primary}
        p="15px"
        borderRadius="4px"
        overflow="auto"
        sx={{
          maxHeight: { xs: "300px", md: "none" }, // Limit height on small screens
          minHeight: "fit-content", // Adjust height based on content
        }}
      >
        <Typography variant="h5" color={darkModeColors.grey} mb="10px">
          Events
        </Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem
              key={event.id}
              sx={{
                bgcolor: darkModeColors.greenAccent[500],
                margin: "10px 0",
                borderRadius: "2px",
              }}
            >
              <ListItemText
                primary={event.title}
                secondary={
                  <Typography color={darkModeColors.grey}>
                    {formatDate(event.start, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* CALENDAR */}
      <Box
        flex="1 1 100%" // Full width on small screens
        ml={{ md: "15px" }} // Margin left on medium and larger screens
        height={{ xs: "50vh", sm: "75vh" }} // Adjust height based on screen size
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <FullCalendar
          height="100%" // Full height of the container
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2024-09-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2024-09-28",
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
