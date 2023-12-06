import { useCallback, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";

const departments = [
  {
    value: "surgeons",
    label: "Surgeons",
  },
  {
    value: "radiologist",
    label: "Radiologist",
  },
  {
    value: "Endocrinologist",
    label: "Endocrinologist",
  },
  {
    value: "Dietician",
    label: "dietician",
  },
  {
    value: "urologist",
    label: "Urologist",
  },
  {
    value: "gynaeologist",
    label: "Gynaeologist",
  },
  {
    value: "cariac surgeon",
    label: "Cariac Surgeon",
  },
  {
    value: "dermatologist",
    label: "Dermatologist",
  },
];

const doctors = [
  {
    value: "kapendra kathayat",
    label: "Kapendra Kathayat",
  },
  {
    value: "lalit sunar",
    label: "Lalit Sunar",
  },
  {
    value: "lokendra dangi",
    label: "Lokendra Dangi",
  },
  {
    value: "Sristy shrestha",
    label: "Sristy Shrestha",
  },
];

export const AppointmentAdd = () => {
  const [values, setValues] = useState({
    fullname: "Sima Dangi",
    email: "sima@dangi.io",
    phone: "+977-9848357212",
    state: "Jumla",
    country: "Nepal",
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the full name"
                  label="Full Name"
                  name="fullname"
                  onChange={handleChange}
                  required
                  value={values.fullname}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phonenumber"
                  onChange={handleChange}
                  required
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Select Department"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {departments.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Select Doctor"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  {doctors.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the subject"
                  label="Subject"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
};
