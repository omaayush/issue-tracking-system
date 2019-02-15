import Model from './Model';

export default class Project extends Model {
    id: number;
    created_at: Date;
    updated_at: Date;
    name: string;

    constructor(id: number, created_at: Date, updated_at: Date, name: string) {
        super();
        this.id = id;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.name = name;
    }

    // getter and setter
    public getid(): number {
        return this.id;
    }

    public getname(): string {
        return this.name;
    }


    public setid(value: number) {
        this.id = value;
    }


    public setname(value: string) {
        this.name = value;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }


    public setCreatedAt(value: Date) {
        this.created_at = value;
    }


    public setUpdatedAt(value: Date) {
        this.updated_at = value;
    }

}
