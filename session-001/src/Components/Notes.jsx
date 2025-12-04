import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import data from "../assets/data.json";

function Notes() {
  const [notes] = useState(data);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Étudiant</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Cours</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((note, index) => (
                <TableRow key={index}>
                  <TableCell>{note.student.id}</TableCell>
                  <TableCell>{note.student.firstname}</TableCell>
                  <TableCell>{note.student.lastname}</TableCell>
                  <TableCell>{note.course}</TableCell>
                  <TableCell>{note.date}</TableCell>
                  <TableCell>{note.grade}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={notes.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Paper>
  );
}

export default Notes;
