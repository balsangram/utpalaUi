import React, { useState } from "react";
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
    Paper,
    Checkbox,
    IconButton,
    TextField,
    TablePagination,
    Stack,
    Typography,
    Button,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import { useNavigate } from "react-router-dom";

function TableComponent5({ title = "Table Name", columns = [], rows = [], onDelete, onCreate }) {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);

    const navigate = useNavigate();

    // SEARCH FILTER
    const filteredRows = rows.filter((row) =>
        Object.values(row).some((value) =>
            String(value).toLowerCase().includes(search.toLowerCase())
        )
    );

    // SELECT SINGLE
    const handleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
        );
    };

    // SELECT ALL
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelected(filteredRows.map((r) => r._id));
        } else {
            setSelected([]);
        }
    };

    return (
        <Paper
            elevation={0}
            sx={{
                padding: 3,
                borderRadius: 3,
                minHeight: "30vh",
                backgroundColor: "var(--color-bg-table)",
            }}
        >

            {/* TITLE + SEARCH + CREATE */}
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mb: 2 }}
            >
                <Stack direction="row" alignItems="center" spacing={3}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {title}
                    </Typography>

                    {/* Search Box */}
                    <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                            width: "280px",
                            paddingX: 1,
                            paddingY: 0.5,
                            border: "1px solid #ccc",
                            borderRadius: 2,
                        }}
                    >
                        <SearchIcon color="primary" />
                        <TextField
                            variant="standard"
                            placeholder="Search here"
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                    </Stack>
                </Stack>

                {/* CREATE BUTTON */}
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={onCreate}
                    sx={{ textTransform: "none", borderRadius: 2 }}
                >
                    Create
                </Button>
            </Stack>

            {/* TABLE */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={
                                        selected.length > 0 &&
                                        selected.length === filteredRows.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </TableCell>

                            <TableCell>Sl. No.</TableCell>

                            {columns.map((col) => (
                                <TableCell key={col.field}>{col.header}</TableCell>
                            ))}

                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {filteredRows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const realIndex = page * rowsPerPage + index + 1;

                                return (
                                    <TableRow key={row._id} hover>
                                        {/* CHECKBOX */}
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                checked={selected.includes(row._id)}
                                                onChange={() => handleSelect(row._id)}
                                            />
                                        </TableCell>

                                        {/* SERIAL NUMBER */}
                                        <TableCell>{realIndex}</TableCell>

                                        {/* ROW DATA */}
                                        {columns.map((col) => (
                                            <TableCell key={col.field}>
                                                {row[col.field]}
                                            </TableCell>
                                        ))}

                                        {/* ⭐ ACTION BUTTONS (Fully Styled) */}
                                        <TableCell
                                            align="center"
                                            sx={{
                                                display: "flex",
                                                gap: 1.5,
                                                justifyContent: "center",
                                                paddingY: 2,
                                            }}
                                        >
                                            {/* Blue View Button */}
                                            <IconButton
                                                onClick={() => navigate(`/view/${row._id}`)}
                                                sx={{
                                                    border: "2px solid #4da3ff",
                                                    color: "#4da3ff",
                                                    borderRadius: "10px",
                                                    padding: "6px",
                                                }}
                                            >
                                                <VisibilityIcon />
                                            </IconButton>

                                            {/* Green Edit Button */}
                                            <IconButton
                                                onClick={() => navigate(`/edit/${row._id}`)}
                                                sx={{
                                                    border: "2px solid #32c671",
                                                    color: "#32c671",
                                                    borderRadius: "10px",
                                                    padding: "6px",
                                                }}
                                            >
                                                <EditIcon />
                                            </IconButton>

                                            {/* Purple Reschedule Button */}
                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: "10px",
                                                    textTransform: "none",
                                                    borderColor: "#9d4edd",
                                                    color: "#9d4edd",
                                                    fontWeight: 600,
                                                    paddingX: 2.5,
                                                    "&:hover": {
                                                        borderColor: "#9d4edd",
                                                        backgroundColor: "#f4e6ff",
                                                    },
                                                }}
                                            >
                                                Reschedule
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* PAGINATION */}
            <TablePagination
                component="div"
                page={page}
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[8, 10, 20, 50]}
                onPageChange={(e, newPage) => setPage(newPage)}
                onRowsPerPageChange={(e) => {
                    setRowsPerPage(parseInt(e.target.value));
                    setPage(0);
                }}
            />
        </Paper>
    );
}

export default TableComponent5;
