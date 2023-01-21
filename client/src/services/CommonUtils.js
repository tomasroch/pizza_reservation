export function validNumberField(e, set) {
    if (e.target.value) {
        const value = e.target.value.replace(/\D/g, "");
        set(value)
    } else {
        set('')
    }
}

export function formatDate(date) {
    const d = new Date(date)
    return '' + d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes()
}

export const CUSTOMER_ROLE = ['REGISTERED_CUSTOMER']
export const EMPLOYEE_ROLE = ['EMPLOYEE', 'ADMIN']
export const ADMIN_ROLE = ['ADMIN']

export const ORDERS_STATUS = ['NEW', 'PROCESSING', 'SENT', 'DELIVERED', 'CANCELLED']
