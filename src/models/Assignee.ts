import Model from './Model';

export default class Assignee extends Model {
    id: number;
    username: string;
    email: string;
    profile_image: string;
    role: string;

    // constructor

    constructor(id: number, username: string, email: string, profile_image: string, role: string) {
        super();
        this.id = id;
        this.username = username;
        this.email = email;
        this.profile_image = profile_image;
        this.role = role;
    }



    // getter and setter
    public getId(): number {
        return this.id;
    }

    public getUsername(): string {
        return this.username;
    }

    public getRole(): string {
        return this.role;
    }

    public setId(value: number) {
        this.id = value;
    }

    public setUsername(value: string) {
        this.username = value;
    }

    public setRole(value: string) {
        this.role = value;
    }

}
