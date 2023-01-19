export function validNumberField(e, set) {
    if (e.target.value) {
        const value = e.target.value.replace(/\D/g, "");
        set(value)
    } else {
        set('')
    }
}

export const CUSTOMER_ROLE = ['REGISTERED_CUSTOMER']
export const EMPLOYEE_ROLE = ['EMPLOYEE']
export const ADMIN_ROLE = ['ADMIN', 'EMPLOYEE']
