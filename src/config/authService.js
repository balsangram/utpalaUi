import { API_BASE_URL } from '../config/api';

export const sendOtp = async (phone) => {
    const response = await fetch(`${API_BASE_URL}/users/login/request-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone }),
        credentials: 'include',
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to send OTP. Please try again.' }));
        throw new Error(errorData.message);
    }

    return response.json();
};


export const verifyOtp = async (phone, otp) => {
    const response = await fetch(`${API_BASE_URL}/users/login/verify-otp`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, otp }),
        credentials: 'include',
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Invalid OTP or an error occurred.' }));
        throw new Error(errorData.message);
    }

    const result = await response.json();

    // The API returns the token and user data nested under a `data` property
    if (result.success && result.data && result.data.accessToken) {
        return {
            ...result,
            token: result.data.accessToken, // Extract the token
            user: result.data.user,
        };
    }
    // Return a structure that matches the Promise type on failure
    return { ...result, token: '', user: { role: '' } };
};
export const logout = async () => {
    const response = await fetch(`${API_BASE_URL}/users/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Logout failed. Please try again.' }));
        // Even if logout fails on the server, we should probably log the user out on the client.
        // For now, we'll throw an error as per the existing pattern.
        throw new Error(errorData.message);
    }

    return response.json();
};
