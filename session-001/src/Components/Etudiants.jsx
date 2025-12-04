import React, { useEffect, useState } from "react";
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

function Etudiants() {
  const API_URL = "http://localhost:8010/api/students";

  const [students, setStudents] = useState([]);

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Charger uniquement (GET)
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(API_URL);
        const result = await response.json();
        setStudents(result);
      } catch (err) {
        console.error("Erreur récupération étudiants:", err);
      }
    };

    fetchStudents();
  }, []);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((student) => (
                <TableRow key={student._id}>
                  <TableCell>{student.firstName}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={students.length}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </Paper>
  );
}

export default Etudiants;
