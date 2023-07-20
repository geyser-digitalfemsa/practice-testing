export function add(a: number, b: number): number {
    return a + b;
}
   
export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiplication(a: number, b: number): number {
    return a * b;
}
export function division(a: number, b: number): any {
    if (b === 0) {
        return 'Error: División entre cero';
    }
    return a / b;
}
export function exponentiation(a: number, b: number): number {
    return Math.pow(a, b);
}