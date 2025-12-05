// NotificationDrawer.jsx - Separate Component File
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useSelector } from 'react-redux'; // If using Redux for notifications; otherwise, pass as props

// Mock data - Replace with API/Redux fetch
const mockNotifications = [
    {
        id: 1,
        title: 'New Patient Admission',
        description: 'John Doe has been admitted to Ward 5.',
        time: '2 min ago',
        unread: true,
        type: 'admission',
    },
    {
        id: 2,
        title: 'Appointment Reminder',
        description: 'Dr. Smith\'s consultation slot is upcoming.',
        time: '1 hour ago',
        unread: false,
        type: 'appointment',
    },
    {
        id: 3,
        title: 'Inventory Low Stock',
        description: 'Paracetamol stock is below threshold.',
        time: '3 hours ago',
        unread: true,
        type: 'inventory',
    },
    {
        id: 4,
        title: 'System Update Available',
        description: 'Update to version 2.1.3 is ready.',
        time: 'Yesterday',
        unread: false,
        type: 'system',
    },
];

function NotificationDrawer({ open, onClose }) {
    // If using Redux, replace with: const unreadNotifications = useSelector(state => state.notifications.unreadCount);
    const [unreadNotifications, setUnreadNotifications] = React.useState(2);
    const notifications = mockNotifications.map((notif) => ({
        ...notif,
        unread: notif.unread && unreadNotifications > 0,
    }));

    const handleNotificationClick = (notification) => {
        if (notification.unread) {
            setUnreadNotifications((prev) => Math.max(0, prev - 1));
        }
        console.log('Notification clicked:', notification);
        onClose(); // Close drawer after interaction
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 360,
                    maxWidth: '92vw',
                    height: '70%',
                    borderRadius: '12px 0 0 12px',
                    overflow: 'hidden',
                    boxShadow: '-4px 0 20px rgba(0,0,0,0.12)',
                    marginTop: '5%',
                    marginRight: '1%',
                },
            }}
        >
            <Box sx={{ p: 2, bgcolor: "var(--color-primary)", color: "var(--color-text-white)" }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Notifications ({unreadNotifications})
                </Typography>
            </Box>

            <Divider />

            <List sx={{ p: 0, height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
                {notifications.map((notification) => (
                    <ListItem
                        key={notification.id}
                        button
                        onClick={() => handleNotificationClick(notification)}
                        sx={{
                            alignItems: 'flex-start',
                            px: 2,
                            py: 1.5,
                            borderBottom: `1px solid var(--color-border)`,
                            bgcolor: notification.unread ? "rgba(205,152,125,0.12)" : "transparent",
                            transition: "background 0.25s ease",
                            '&:hover': { bgcolor: "rgba(205,152,125,0.22)" },
                            '&:last-child': { borderBottom: 'none' },
                        }}
                    >
                        <ListItemAvatar sx={{ minWidth: 42 }}>
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    borderRadius: '50%',
                                    bgcolor: notification.unread ? "var(--color-primary)" : "var(--color-text-muted)",
                                    mt: 0.5,
                                }}
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography variant="body2" sx={{ fontWeight: 600, color: "var(--color-text-dark)" }}>
                                    {notification.title}
                                </Typography>
                            }
                            secondary={
                                <Box sx={{ mt: 0.5 }}>
                                    <Typography
                                        variant="caption"
                                        sx={{ color: "var(--color-text-muted)", display: "block", fontSize: "0.77rem" }}
                                    >
                                        {notification.description}
                                    </Typography>
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.3 }}>
                                        <AccessTimeIcon fontSize="inherit" sx={{ color: "var(--color-text-muted)", fontSize: "0.75rem" }} />
                                        <Typography variant="caption" sx={{ color: "var(--color-text-muted)", fontSize: "0.75rem", fontWeight: 500 }}>
                                            {notification.time}
                                        </Typography>
                                    </Box>
                                </Box>
                            }
                        />
                    </ListItem>
                ))}

                {notifications.length === 0 && (
                    <ListItem sx={{ justifyContent: "center", py: 3 }}>
                        <ListItemText
                            primary="No notifications"
                            secondary="You're all caught up!"
                            sx={{ textAlign: "center", color: "var(--color-text-muted)" }}
                        />
                    </ListItem>
                )}
            </List>
        </Drawer>
    );
}

export default NotificationDrawer;