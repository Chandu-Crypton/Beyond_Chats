export const Validation = (formData) => {
    if (!formData.fullName || !formData.email || !formData.password) {
        return 'All fields are required';
    }
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(formData.email)) {
        return 'Invalid email address';
    }

    return '';  // No errors
};