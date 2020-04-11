import React, { useState } from "react";
import TodayDiapersChange from "./TodayDiapersChange";
import TodayFeeding from "./TodayFeeding";
import Container from "@material-ui/core/Container";
import { es } from "date-fns/locale";

import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Typography from "@material-ui/core/Typography";

const Home = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <Container maxWidth="sm">
      <h1>Inicio</h1>
      <p>
      <Typography variant="h6" component="h2">
          Seleccionar Fecha
        </Typography>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
          <DatePicker value={selectedDate} onChange={handleDateChange} 
          format={'PPP'}
          />
        </MuiPickersUtilsProvider>
      </p>
      <TodayDiapersChange date={selectedDate} />
      <p></p>
      <TodayFeeding date={selectedDate} />
    </Container>
  );
};

export default Home;
