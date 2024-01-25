export class Faker {
    static generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        return Array.from({ length }).map(() =>
            characters.charAt(Math.floor(Math.random() * charactersLength))).join('');
    }
}