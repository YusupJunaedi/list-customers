import { Dialog, DialogContent, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import BusinessIcon from '@material-ui/icons/Business';

function ModalDialog({ openDialog, closeModal, data }) {

    const handleClose = () => {
        closeModal(false);
    };

    return (
        <Dialog open={openDialog}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <div style={{ textAlign: 'center' }}> <h3>Data Customer {data.nama}</h3> </div>
            <DialogContent>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={data.email} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={data.nama} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ContactPhoneIcon />
                        </ListItemIcon>
                        <ListItemText primary={data.no_tlpn} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <BusinessIcon />
                        </ListItemIcon>
                        <ListItemText primary={data.alamat} />
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
    )
}

export default ModalDialog
