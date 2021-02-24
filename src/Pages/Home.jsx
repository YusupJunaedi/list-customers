import React, { useState } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux';
import './Home.css'
import LaunchIcon from '@material-ui/icons/Launch';
import { Button } from '@material-ui/core';
import ModalDialog from '../Components/Dialog/ModalDialog';


function Home() {

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({})

    const customers = useSelector(state => state.data)

    return (
        <div className="container-main">

            <h2>DATA CUSTOMERS</h2>

            <div className="table">
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">No</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Show</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map((row, index) => (
                                <TableRow key={row.name}>
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">
                                        <Button onClick={() => {
                                            setData({
                                                email: row.email,
                                                nama: row.nama,
                                                no_tlpn: row.no_tlpn,
                                                alamat: row.alamat
                                            })
                                            setOpenModal(true)
                                        }}>
                                            <LaunchIcon color="primary" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <ModalDialog openDialog={openModal} closeModal={(value => setOpenModal(value))} data={data} />

        </div>
    )
}

export default Home
