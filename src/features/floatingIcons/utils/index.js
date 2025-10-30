export function getIconClassName(icon) {
    switch (icon) {
        case 'github':
            return 'fa-brands fa-github text-4xl';
        case 'linkedin':
            return 'fa-brands fa-linkedin text-4xl';
        case 'email':
            return 'fa-solid fa-envelope text-4xl';
        default:
            return '';
    }
}

export function getIconUrl(icon) {
    switch (icon) {
        case 'github':
            return 'https://github.com/IsmaelDLG';
        case 'linkedin':
            return 'https://www.linkedin.com/in/ismael-de-la-gracia-cobos/';
        case 'email':
            return 'mailto:ismadlg.works@gmail.com';
        default:
            return '';
    }
}