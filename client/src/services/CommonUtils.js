export function validNumberField(e, set) {
    if (e.target.value) {
        const value = e.target.value.replace(/\D/g, "");
        set(value)
    } else {
        set('')
    }
}