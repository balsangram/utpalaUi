// Updated ViewCard component to display all data values in a single card layout
// Uses key-value pairs for read-only display. All values shown in one cohesive card.

import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Grid, // Using Grid for two-column layout: label | value
} from '@mui/material';

function ViewCard({ data = {}, fields = [] }) {
    return (
        <Card sx={{ maxWidth: 600, mx: 'auto' }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>
                    Patient Admission Details
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Grid container spacing={2}>
                    {fields.map((field) => (
                        <React.Fragment key={field.name}>
                            <Grid item xs={4}>
                                <Typography variant="subtitle2" color="textSecondary">
                                    {field.label}:
                                </Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="body1">
                                    {data[field.name] || 'N/A'}
                                </Typography>
                            </Grid>
                        </React.Fragment>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
}

export default ViewCard;