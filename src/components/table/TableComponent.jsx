// import React, { useState } from "react";
// import {
//     Table, TableHead, TableRow, TableCell, TableBody,
//     TableContainer, Paper, Checkbox,
//     TablePagination, Stack,
//     IconButton
// } from "@mui/material";

// function TableComponent({
//     columns = [],
//     rows = [],

//     actions = [],   // ← ALL ACTIONS COME FROM PARENT

//     showStatusBadge = false,
//     statusField = null,
// }) {
//     const [selected, setSelected] = useState([]);
//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(8);

//     const handleSelectAll = (e) => {
//         if (e.target.checked) setSelected(rows.map((r) => r._id));
//         else setSelected([]);
//     };

//     const handleSelect = (id) => {
//         setSelected((prev) =>
//             prev.includes(id)
//                 ? prev.filter((x) => x !== id)
//                 : [...prev, id]
//         );
//     };

//     const hasActions = actions.length > 0;

//     return (
//         <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>

//             {/* TABLE */}
//             <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell padding="checkbox">
//                                 <Checkbox
//                                     checked={
//                                         selected.length === rows.length && rows.length > 0
//                                     }
//                                     indeterminate={
//                                         selected.length > 0 &&
//                                         selected.length < rows.length
//                                     }
//                                     onChange={handleSelectAll}
//                                 />
//                             </TableCell>

//                             <TableCell>Sl. No.</TableCell>

//                             {columns.map((col) => (
//                                 <TableCell key={col.field}>{col.header}</TableCell>
//                             ))}

//                             {hasActions && (
//                                 <TableCell align="center">Actions</TableCell>
//                             )}
//                         </TableRow>
//                     </TableHead>

//                     <TableBody>
//                         {rows
//                             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             .map((row, i) => (
//                                 <TableRow key={row._id || i} hover>
//                                     <TableCell padding="checkbox">
//                                         <Checkbox
//                                             checked={selected.includes(row._id)}
//                                             onChange={() => handleSelect(row._id)}
//                                         />
//                                     </TableCell>

//                                     <TableCell>
//                                         {page * rowsPerPage + i + 1}
//                                     </TableCell>

//                                     {columns.map((col) => (
//                                         <TableCell key={col.field}>
//                                             {row[col.field] ?? "-"}
//                                         </TableCell>
//                                     ))}

//                                     {hasActions && (
//                                         <TableCell align="center">
//                                             <Stack direction="row" spacing={0.8} justifyContent="center">
//                                                 {actions.map((action, idx) => (
//                                                     <IconButton
//                                                         key={idx}
//                                                         sx={{ color: action.color || "var(--color-primary)" }}
//                                                         onClick={() => action.onClick(row)}
//                                                         title={action.label}
//                                                     >
//                                                         {action.icon}
//                                                     </IconButton>
//                                                 ))}
//                                             </Stack>
//                                         </TableCell>
//                                     )}
//                                 </TableRow>
//                             ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             {/* PAGINATION */}
//             <TablePagination
//                 component="div"
//                 count={rows.length}
//                 page={page}
//                 rowsPerPage={rowsPerPage}
//                 onPageChange={(_, p) => setPage(p)}
//                 onRowsPerPageChange={(e) => {
//                     setRowsPerPage(+e.target.value);
//                     setPage(0);
//                 }}
//             />
//         </Paper>
//     );
// }

// export default TableComponent;


import React, { useState } from "react";
import {
    Table, TableHead, TableRow, TableCell, TableBody,
    TableContainer, Paper, Checkbox,
    TablePagination, Stack,
    IconButton,
    Chip
} from "@mui/material";

function TableComponent({
    columns = [],
    rows = [],

    actions = [],   // ← ALL ACTIONS COME FROM PARENT

    showStatusBadge = false,
    statusField = null,
}) {
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(8);

    const handleSelectAll = (e) => {
        if (e.target.checked) setSelected(rows.map((r) => r._id));
        else setSelected([]);
    };

    const handleSelect = (id) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((x) => x !== id)
                : [...prev, id]
        );
    };

    const hasActions = actions.length > 0;

    // Helper function to render cell content
    const renderCellContent = (col, row) => {
        if (col.render) {
            return col.render(row);
        }
        if (col.field === statusField && showStatusBadge && row[col.field]) {
            const status = row[col.field];
            return (
                // <Chip
                //     label={status}
                //     color={status === 'Active' ? 'success' : 'error'}
                //     size="small"
                //     variant="filled"
                // />
                <Chip
                    label={status}
                    size="small"
                    sx={{
                        backgroundColor:
                            status?.toLowerCase() === "active" ? "#1987542e" : "#8e714f30",
                        color:
                            status?.toLowerCase() === "active" ? "#2C5530" : "#5A5044",
                        fontWeight: 500,
                    }}
                />

            );
        }
        return row[col.field] ?? "-";
    };

    return (
        <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>

            {/* TABLE */}
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={
                                        selected.length === rows.length && rows.length > 0
                                    }
                                    indeterminate={
                                        selected.length > 0 &&
                                        selected.length < rows.length
                                    }
                                    onChange={handleSelectAll}
                                />
                            </TableCell>

                            <TableCell>Sl. No.</TableCell>

                            {columns.map((col) => (
                                <TableCell key={col.field}>{col.header}</TableCell>
                            ))}

                            {hasActions && (
                                <TableCell align="center">Actions</TableCell>
                            )}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, i) => (
                                <TableRow key={row._id || i} hover>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selected.includes(row._id)}
                                            onChange={() => handleSelect(row._id)}
                                        />
                                    </TableCell>

                                    <TableCell>
                                        {page * rowsPerPage + i + 1}
                                    </TableCell>

                                    {columns.map((col) => (
                                        <TableCell key={col.field}>
                                            {renderCellContent(col, row)}
                                        </TableCell>
                                    ))}

                                    {hasActions && (
                                        <TableCell align="center">
                                            <Stack direction="row" spacing={0.8} justifyContent="center">
                                                {actions.map((action, idx) => (
                                                    <IconButton
                                                        key={idx}
                                                        sx={{ color: action.color || "var(--color-primary)" }}
                                                        onClick={() => action.onClick(row)}
                                                        title={action.label}
                                                    >
                                                        {action.icon}
                                                    </IconButton>
                                                ))}
                                            </Stack>
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* PAGINATION */}
            <TablePagination
                component="div"
                count={rows.length}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={(_, p) => setPage(p)}
                onRowsPerPageChange={(e) => {
                    setRowsPerPage(+e.target.value);
                    setPage(0);
                }}
            />
        </Paper>
    );
}

export default TableComponent;